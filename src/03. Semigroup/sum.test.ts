import { sum } from "./sum";

describe("sum", () => {
	it("sum 함수로 여러 숫자 합치기", () => {
		expect(sum(0)([2, 3, 4, 5])).toBe(14);
		expect(sum(5)([5, 5, 5, 5])).toBe(25);
		expect(sum(7)([3, 2, 1, 0])).toBe(13);
		expect(sum(10)([1, 2, 3, 4])).toBe(20);
	});
});
