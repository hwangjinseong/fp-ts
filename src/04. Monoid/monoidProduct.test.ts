import { monoidProduct } from "./monoidProduct";

describe("monoidProduct", () => {
	it("monoidProduct.concat(1, monoidProduct.empty) is equal to 1", () => {
		expect(monoidProduct.concat(1, monoidProduct.empty)).toBe(1);
	});
	it("monoidProduct.concat(monoidProduct.empty, 1) is equal to 1", () => {
		expect(monoidProduct.concat(monoidProduct.empty, 1)).toBe(1);
	});
	it("monoidProduct.concat(monoidProduct.empty, monoidProduct.empty) is equal to 1", () => {
		expect(
			monoidProduct.concat(monoidProduct.empty, monoidProduct.empty)
		).toBe(1);
	});
	it("monoidProduct.concat(1, 2) is equal to 2", () => {
		expect(monoidProduct.concat(1, 2)).toBe(2);
	});
	it("monoidProduct.concat(1, monoidProduct.concat(2, 3)) is equal to 6", () => {
		expect(monoidProduct.concat(1, monoidProduct.concat(2, 3))).toBe(6);
	});
	it("monoidProduct.concat(monoidProduct.concat(1, 2), 3) is equal to 6", () => {
		expect(monoidProduct.concat(monoidProduct.concat(1, 2), 3)).toBe(6);
	});
});
