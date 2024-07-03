import { compose } from "./compose";

describe("compose", () => {
	it("should compose two functions", () => {
		const f = (a: number) => a + 1;
		const g = (b: number) => b * 2;

		const result = compose(g, f)(1);

		expect(result).toBe(4);
	});
});
