import type { Apply1 } from "fp-ts/lib/Apply";
import type { Kind, URIS } from "fp-ts/lib/HKT";

type Curried3<B, C, D, E> = (b: B) => (c: C) => (d: D) => E;

// g: (b: F<B>) => (c: F<C>) => (d: F<D>) => F<E>
export const liftA3 =
	<F extends URIS>(
		F: Apply1<F>
	): (<B, C, D, E>(
		g: Curried3<B, C, D, E>
	) => Curried3<Kind<F, B>, Kind<F, C>, Kind<F, D>, Kind<F, E>>) =>
	(g) =>
	(fb) =>
	(fc) =>
	(fd) =>
		F.ap(F.ap(F.map(fb, g), fc), fd);
