import { Monoid } from "./Monoid";

export const monoidAny: Monoid<boolean> = {
	concat: (x, y) => x || y,
	empty: false,
};
