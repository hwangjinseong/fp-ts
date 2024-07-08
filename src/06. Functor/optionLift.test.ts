import { none, some } from "fp-ts/lib/Option";
import { optionLift } from "./optionLift";

describe("optionLift", () => {
	it("B = string, C = number 인 경우", () => {
		const g = (b: string) => b.length;
		const liftedG = optionLift(g);

		expect(liftedG(none)).toEqual(none);
		expect(liftedG(some("aa"))).toEqual(some(2));
		expect(liftedG(some(""))).toEqual(some(0));
	});

	it("B = number, C = boolean 인 경우", () => {
		const g = (b: number) => b % 2 === 0;
		const liftedG = optionLift(g);

		expect(liftedG(none)).toEqual(none);
		expect(liftedG(some(2))).toEqual(some(true));
		expect(liftedG(some(3))).toEqual(some(false));
		expect(liftedG(some(0))).toEqual(some(true));
	});
});
