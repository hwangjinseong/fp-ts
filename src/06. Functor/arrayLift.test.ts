import { arrayLift } from "./arrayLift";

describe("arrayLift", () => {
	it("arrayLift 함수는 함수 g를 받아들이고, g를 배열에 적용하는 새로운 함수를 반환합니다.", () => {
		const g = (n: number) => n * 2;
		const liftedG = arrayLift(g);

		expect(liftedG([1, 2, 3])).toEqual([2, 4, 6]);
		expect(liftedG([0, -1, -2])).toEqual([0, -2, -4]);
		expect(liftedG([])).toEqual([]);
	});
});
