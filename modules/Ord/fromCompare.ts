import { Ord } from "fp-ts/lib/Ord";
import { Ordering } from "../Ordering";

export declare const fromCompare: <A>(
	compare: (first: A, second: A) => Ordering
) => Ord<A>;
