import { getLastSemigroup } from "./getLastSemigroup";

describe("getLastSemigroup", () => {
	it("Semigroup 인스턴스로 두 번째 인자 반환", () => {
		const last = getLastSemigroup<number>();
		const x = 1;
		const y = 2;
		const z = 3;

		expect(last.concat(x, y)).toBe(2);
		expect(last.concat(y, z)).toBe(3);
		expect(last.concat(z, x)).toBe(1);
	});
	it("Semigroup 인스턴스로 두 번째 인자 반환 : (x + y) + z = x + (y + z) 만족", () => {
		const last = getLastSemigroup<number>();
		const x = 1;
		const y = 2;
		const z = 3;

		expect(last.concat(last.concat(x, y), z)).toBe(3);
		expect(last.concat(x, last.concat(y, z))).toBe(3);
	});
});
