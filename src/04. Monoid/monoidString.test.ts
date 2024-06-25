import { monoidString } from "./monoidString";

describe("monoidString", () => {
	it("should be a monoid", () => {
		expect(monoidString.concat("a", monoidString.empty)).toBe("a");
		expect(monoidString.concat(monoidString.empty, "a")).toBe("a");
		expect(
			monoidString.concat(monoidString.empty, monoidString.empty)
		).toBe("");
	});
});
