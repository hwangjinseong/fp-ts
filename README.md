# Code Conventions

**Table of contents**

- [Module structure](https://gcanti.github.io/fp-ts/guides/code-conventions.html#module-structure)
- [FAQ](https://gcanti.github.io/fp-ts/guides/code-conventions.html#faq)
  - [What a `C` suffix means, e.g. `Functor2C` vs `Functor2`](https://gcanti.github.io/fp-ts/guides/code-conventions.html#what-a-c-suffix-means-eg-functor2c-vs-functor2)
  - [What an `E` suffix means, e.g. `matchE`](https://gcanti.github.io/fp-ts/guides/code-conventions.html#what-an-e-suffix-means-eg-matche)
  - [What a `K` suffix means, e.g. `fromEitherK` or `chainEitherK`](https://gcanti.github.io/fp-ts/guides/code-conventions.html#what-a-k-suffix-means-eg-fromeitherk-or-chaineitherk)
  - [What a `T` suffix means, e.g. `sequenceT`](https://gcanti.github.io/fp-ts/guides/code-conventions.html#what-a-t-suffix-means-eg-sequencet)
  - [What a `W` suffix means, e.g. `chainW` or `chainEitherKW`](https://gcanti.github.io/fp-ts/guides/code-conventions.html#what-a-w-suffix-means-eg-chainw-or-chaineitherkw)

## **Import Statements**

To properly import modules from `fp-ts`, you should use the following syntax:

```jsx
import ... from 'fp-ts/<module>'
```

For instance, when importing the `Option` module, you can use the following code:

```jsx
import * as Option from "fp-ts/Option";
```

This ensures that you’re importing the required modules correctly.

## **Module structure**

In general a module containing the definition of a data structure has the following structure

- `URI` definition and module augmentation
- data structure definition
- companion functions
- instance functions (private)
- type class instance definitions (either constants or functions)

## **FAQ**

### **What a `C` suffix means, e.g. `Functor2C` vs `Functor2`**

The naming convention is:

- the number means the kind
- `C` means *C*onstrained

| Kind             | Type class         | Type defunctionalization | Note                                               |
| ---------------- | ------------------ | ------------------------ | -------------------------------------------------- |
| all              | Functor<F>         | HKT<F, A>                |                                                    |
| _ -> _           | Functor1<F>        | Kind<F, A>               |                                                    |
| _ -> _ -> \*     | Functor2<F>        | Kind2<F, E, A>           |                                                    |
| _ -> _ -> \*     | Functor2C<F, E>    | Kind2<F, E, A>           | A variant of Functor2 where E is fixed             |
| _ -> _ -> _ -> _ | Functor3<F>        | Kind3<F, R, E, A>        |                                                    |
| _ -> _ -> _ -> _ | Functor3C<F, R, E> | Kind3<F, R, E, A>        | A variant of Functor3 where both R and E are fixed |

**Example** `Functor`

The base definition

```jsx
export interface Functor<F> {
  readonly URI: F
  readonly map: <A, B>(fa: HKT<F, A>, f: (a: A) => B) => HKT<F, B>
}
```

The definition for type constructors of kind `* -> * -> *` (e.g. `Either`)

```jsx
export interface Functor2<F extends URIS2> {
  readonly URI: F
  //             v-- here E is free
  readonly map: <E, A, B>(fa: Kind2<F, E, A>, f: (a: A) => B) => Kind2<F, E, B>
}
```

The definition for type constructors that start with kind `* -> * -> *` but need to be constrained in order to admit an instance (e.g. `Validation`).

```jsx
//                           this fixes E --v
export interface Functor2C<F extends URIS2, E> {
  readonly URI: F
  readonly _E: E
  //                                v-- here E is fixed ---------------v
  readonly map: <A, B>(fa: Kind2<F, E, A>, f: (a: A) => B) => Kind2<F, E, B>
}
```

For example, `Validation` admits a `Functor` instance only if you provide a `Semigroup` instance for the failure part

```jsx
*//   this fixes E --v                                            v-- here E is fixed*const
getFunctor = <E>(S: Semigroup<E>): Functor2C<"Validation", E> = { ... }
```

### **What an `E` suffix means, e.g. `matchE`**

`E` means *E*ffect. An example of its use is in the `matchE` destructor on monad transformers like `TaskOption` or `ReaderTaskEither`.

**Example**

Both of these destructions result in a `Task<number>`, but in the case of `matchE` an effect (in this case in the form of a `Task`) is returned on match.

```jsx
import * as T from 'fp-ts/Task'
import * as TO from 'fp-ts/TaskOption'
import { pipe } from 'fp-ts/function'

const value = TO.of('hello')

*// T.Task<number>*pipe(
  value,
  TO.match(
    () => 0,
    (str) => str.length
  )
)

*// T.Task<number>*pipe(
  value,
  TO.matchE(
    () => T.of(0),
    (str) => T.of(str.length)
  )
)
```

### **What a `K` suffix means, e.g. `fromEitherK` or `chainEitherK`**

`K` means *K*leisli. A *Kleisli arrow* is a function with the following signature

`;(a: A) => F<B>`

where `F` is a type constructor.

**Example**

Let’s say we have the following parser

```jsx
import * as E from "fp-ts/Either";

function parse(s: string): E.Either<Error, number> {
  const n = parseFloat(s);
  return isNaN(n)
    ? E.left(new Error(`cannot decode ${JSON.stringify(s)} to number`))
    : E.right(n);
}
```

and a value of type `IOEither<Error, string>`

```jsx
import * as IE from "fp-ts/IOEither";

const input: IE.IOEither<Error, string> = IE.right("foo");
```

how can we parse `input`?

We could lift the Kleisli arrow `parse`, i.e. transform a function

```jsx
;(s: string) => E.Either<Error, number>
```

into a function

```jsx
;(s: string) => IE.IOEither<Error, number>
```

That’s what `fromEitherK` is all about

```jsx
import { pipe } from "fp-ts/function";

pipe(input, IE.chain(IE.fromEitherK(parse)))(); // left(new Error('cannot decode "foo" to number'))

// or with less boilerplate
pipe(input, IE.chainEitherK(parse))(); // left(new Error('cannot decode "foo" to number'))
```

### **What a `T` suffix means, e.g. `sequenceT`**

in `sequenceT` means *T*uple, I borrowed the name from the corresponding [Haskell function](http://hackage.haskell.org/package/tuple-0.3.0.2/docs/Data-Tuple-Sequence.html)

However usually it means *T*ransformer like in “monad transformers” (e.g. `OptionT`, `EitherT`, `ReaderT`, `StateT`)

### **What a `W` suffix means, e.g. `chainW` or `chainEitherKW`**

`W` means *W*iden. Functions that end with `W` are able to aggregate errors into a union (for `Either` based data types) or environments into an intersection (for `Reader` based data types).

**Example**

```jsx
import * as E from "fp-ts/Either";
import * as TE from "fp-ts/TaskEither";
import { pipe } from "fp-ts/pipeable";

declare function parseString(s: string): E.Either<string, number>;
declare function fetchUser(id: number): TE.TaskEither<Error, User>;

// this raises an error because: Type 'string' is not assignable to type 'Error'
const program_ = (s: string) =>
  pipe(s, TE.fromEitherK(parseString), TE.chain(fetchUser));

// const program: (s: string) => TE.TaskEither<string | Error, User>
const program = (s: string) =>
  pipe(s, TE.fromEitherK(parseString), TE.chainW(fetchUser));
```
