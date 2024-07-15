import { none, some } from "fp-ts/lib/Option";
import { flatten } from "./flatten";

describe("flatten", () => {
	it("flatten 테스트", () => {
		expect(flatten(some(some(1)))).toEqual(some(1));
		expect(flatten(some(some("flatten")))).toEqual(some("flatten"));
		expect(flatten(some(none))).toBe(none);
		expect(flatten(none)).toBe(none);
	});
});
