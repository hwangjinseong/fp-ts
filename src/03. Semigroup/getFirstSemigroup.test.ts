import { getFirstSemigroup } from "./getFirstSemigroup";

describe("getFirstSemigroup", () => {
	it("Semigroup 인스턴스로 첫 번째 인자 반환", () => {
		const first = getFirstSemigroup<number>();
		const x = 1;
		const y = 2;
		const z = 3;

		expect(first.concat(x, y)).toBe(1);
		expect(first.concat(y, z)).toBe(2);
		expect(first.concat(z, x)).toBe(3);
	});
	it("Semigroup 인스턴스로 첫 번째 인자 반환 : (x + y) + z = x + (y + z) 만족", () => {
		const first = getFirstSemigroup<number>();
		const x = 1;
		const y = 2;
		const z = 3;

		expect(first.concat(first.concat(x, y), z)).toBe(1);
		expect(first.concat(x, first.concat(y, z))).toBe(1);
	});
});
