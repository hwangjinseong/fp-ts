import { product } from "./product";

describe("product", () => {
	it("product 함수로 여러 숫자 곱하기", () => {
		expect(product(1)([1, 2, 3, 4])).toBe(24);
		expect(product(2)([1, 2, 3, 4])).toBe(48);
		expect(product(3)([1, 2, 3, 4])).toBe(72);
		expect(product(4)([1, 2, 3, 4])).toBe(96);
		expect(product(5)([1, 2, 3, 4])).toBe(120);
	});
});
