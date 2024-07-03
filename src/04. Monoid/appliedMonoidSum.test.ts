import { isNone, isSome, none, some } from "fp-ts/lib/Option";
import { appliedMonoidSum } from "./appliedMonoidSum";

describe("appliedMonoidSum", () => {
	it("appliedMonoidSum.concat (none, none)", () => {
		const result = appliedMonoidSum.concat(none, none);
		expect(result).toBe(none);
		expect(isNone(result)).toBeTruthy();
	});

	it("appliedMonoidSum.concat (none, some)", () => {
		const result = appliedMonoidSum.concat(none, some(1));
		expect(result).toBe(none);
		expect(isNone(result)).toBeTruthy();
	});

	it("appliedMonoidSum.concat (some, some)", () => {
		const result = appliedMonoidSum.concat(some(1), some(2));
		expect(result).toEqual(some(3));
		expect(isSome(result)).toBeTruthy();
	});
});
