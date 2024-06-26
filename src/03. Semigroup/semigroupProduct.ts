import { Semigroup } from "./Semigroup";

// `(number, *)` 식의 Semigroup 입니다.
export const semigroupProduct: Semigroup<number> = {
	concat: (x, y) => x * y,
};
