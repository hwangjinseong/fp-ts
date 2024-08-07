import { Option, isNone, none, some } from "fp-ts/Option";

export const applicativeOption = {
	map: <A, B>(fa: Option<A>, f: (a: A) => B): Option<B> =>
		isNone(fa) ? none : some(f(fa.value)),
	of: <A>(a: A): Option<A> => some(a),
	ap: <A, B>(fab: Option<(a: A) => B>, fa: Option<A>): Option<B> =>
		isNone(fab) ? none : applicativeOption.map(fa, fab.value),
};
