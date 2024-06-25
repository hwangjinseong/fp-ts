import { monoidAll } from "./monoidAll";

describe("monoidAll", () => {
	it("should be a monoid", () => {
		expect(monoidAll.concat(true, monoidAll.empty)).toBe(true);
		expect(monoidAll.concat(monoidAll.empty, true)).toBe(true);
		expect(monoidAll.concat(monoidAll.empty, monoidAll.empty)).toBe(true);
	});
});
