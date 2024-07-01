import { monoidPoint } from "./monoidPoint";

describe("monoidPoint", () => {
	it("should combine two points", () => {
		const point1 = { x: 1, y: 2 };
		const point2 = { x: 3, y: 4 };

		const result = monoidPoint.concat(point1, point2);

		expect(result).toEqual({ x: 4, y: 6 });
	});
});
