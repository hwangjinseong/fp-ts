import { ordNumber } from "./ordNumber";

describe("ordNumber", () => {
	it("숫자가 동일하면 true를 반환해야 합니다.", () => {
		expect(ordNumber.equals(1, 1)).toBeTruthy();
	});

	it("숫자가 동일하지 않으면 false를 반환해야 합니다.", () => {
		expect(ordNumber.equals(1, 2)).toBeFalsy();
	});

	it("첫 번째 숫자가 두 번째 숫자보다 작으면 -1을 반환해야 합니다.", () => {
		expect(ordNumber.compare(1, 2)).toBe(-1);
	});

	it("첫 번째 숫자가 두 번째 숫자보다 크면 1을 반환해야 합니다.", () => {
		expect(ordNumber.compare(2, 1)).toBe(1);
	});

	it("두 숫자가 동일하면 0을 반환해야 합니다.", () => {
		expect(ordNumber.compare(1, 1)).toBe(0);
	});
});
