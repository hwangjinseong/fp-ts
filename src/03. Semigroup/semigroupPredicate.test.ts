import { semigroupPredicate } from "./semigroupPredicate";

describe("semigroupPredicate", () => {
	it("semigroupPredicate.concat 함수 테스트 (isPositiveX, isPositiveY)", () => {
		const isPositiveX = ({ x }: { x: number }) => x > 0;
		const isPositiveY = ({ y }: { y: number }) => y > 0;
		const isPositiveXY = semigroupPredicate.concat(
			isPositiveX,
			isPositiveY
		);
		expect(isPositiveXY({ x: 1, y: 1 })).toBeTruthy();
		expect(isPositiveXY({ x: -1, y: 1 })).toBeFalsy();
		expect(isPositiveXY({ x: 1, y: -1 })).toBeFalsy();
		expect(isPositiveXY({ x: -1, y: -1 })).toBeFalsy();
	});
});
