import { min } from "./min";
import { ordNumber } from "./ordNumber";

describe("min", () => {
	it("ordNumber를 사용한 min으로 비교해서 숫자 중에서 더 작은 값을 반환해야 합니다.", () => {
		expect(min(ordNumber)(10, 2)).toBe(2);
		expect(min(ordNumber)(3, 1000)).toBe(3);
		expect(min(ordNumber)(1, 400000)).toBe(1);
	});
});
