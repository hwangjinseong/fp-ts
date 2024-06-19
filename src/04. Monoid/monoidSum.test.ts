import { monoidSum } from "./monoidSum";

describe("monoidSum", () => {
	it("monoidSum.concat(1, monoidSum.empty) is equal to 1", () => {
		expect(monoidSum.concat(1, monoidSum.empty)).toBe(1);
	});
	it("monoidSum.concat(monoidSum.empty, 1) is equal to 1", () => {
		expect(monoidSum.concat(monoidSum.empty, 1)).toBe(1);
	});
	it("monoidSum.concat(monoidSum.empty, monoidSum.empty) is equal to 0", () => {
		expect(monoidSum.concat(monoidSum.empty, monoidSum.empty)).toBe(0);
	});
	it("monoidSum.concat(1, 2) is equal to 3", () => {
		expect(monoidSum.concat(1, 2)).toBe(3);
	});
	it("monoidSum.concat(1, monoidSum.concat(2, 3)) is equal to 6", () => {
		expect(monoidSum.concat(1, monoidSum.concat(2, 3))).toBe(6);
	});
	it("monoidSum.concat(monoidSum.concat(1, 2), 3) is equal to 6", () => {
		expect(monoidSum.concat(monoidSum.concat(1, 2), 3)).toBe(6);
	});
});
