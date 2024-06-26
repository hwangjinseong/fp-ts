import { semigroupSum } from "./semigroupSum";

describe("semigroupSum", () => {
	it("semigroupSum 인스턴스로 숫자 더해서 반환", () => {
		const x = 1;
		const y = 2;
		const z = 3;

		expect(semigroupSum.concat(x, y)).toBe(3);
		expect(semigroupSum.concat(y, z)).toBe(5);
		expect(semigroupSum.concat(z, x)).toBe(4);
	});
	it("semigroupSum 인스턴스로 숫자 더하기 : (x + y) + z = x + (y + z) 만족", () => {
		const x = 1;
		const y = 2;
		const z = 3;

		expect(semigroupSum.concat(semigroupSum.concat(x, y), z)).toBe(6);
		expect(semigroupSum.concat(x, semigroupSum.concat(y, z))).toBe(6);
	});
});
