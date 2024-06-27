import { monoidAny } from "./monoidAny";

describe("monoidAny", () => {
	it("should return true when x is true and y is false", () => {
		const x = true;
		const y = false;
		const result = monoidAny.concat(x, y);

		expect(result).toBe(true);
	});

	it("should return true when x is false and y is true", () => {
		const x = false;
		const y = true;
		const result = monoidAny.concat(x, y);

		expect(result).toBe(true);
	});

	it("should return true when x is true and y is true", () => {
		const x = true;
		const y = true;
		const result = monoidAny.concat(x, y);

		expect(result).toBe(true);
	});

	it("should return false when x is false and y is false", () => {
		const x = false;
		const y = false;
		const result = monoidAny.concat(x, y);

		expect(result).toBe(false);
	});
});
