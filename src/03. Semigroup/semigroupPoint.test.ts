import { semigroupPoint } from "./semigroupPoint";

describe("semigroupPoint", () => {
	it("semigroupPoint 인스턴스로 두 점을 더해서 반환", () => {
		const x = { x: 1, y: 2 };
		const y = { x: 2, y: 3 };
		const z = { x: 3, y: 4 };
		expect(semigroupPoint.concat(x, y)).toEqual({ x: 3, y: 5 });
		expect(semigroupPoint.concat(y, z)).toEqual({ x: 5, y: 7 });
		expect(semigroupPoint.concat(z, x)).toEqual({ x: 4, y: 6 });
	});
	it("semigroupPoint 인스턴스로 두 점을 더하기 : (x + y) + z = x + (y + z) 만족", () => {
		const x = { x: 1, y: 2 };
		const y = { x: 2, y: 3 };
		const z = { x: 3, y: 4 };
		expect(semigroupPoint.concat(semigroupPoint.concat(x, y), z)).toEqual({
			x: 6,
			y: 9,
		});
		expect(semigroupPoint.concat(x, semigroupPoint.concat(y, z))).toEqual({
			x: 6,
			y: 9,
		});
	});
});
