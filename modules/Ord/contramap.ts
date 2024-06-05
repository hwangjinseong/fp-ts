import { Ord } from "fp-ts/lib/Ord";

export declare const contramap: <A, B>(
	f: (b: B) => A
) => (fa: Ord<A>) => Ord<B>;
