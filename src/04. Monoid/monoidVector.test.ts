import { monoidVector } from "./monoidVector";

describe("monoidVector", () => {
	it("should combine two vectors", () => {
		const vector1 = {
			from: { x: 1, y: 2 },
			to: { x: 3, y: 4 },
		};
		const vector2 = {
			from: { x: 5, y: 6 },
			to: { x: 7, y: 8 },
		};

		const result = monoidVector.concat(vector1, vector2);

		expect(result).toEqual({
			from: { x: 6, y: 8 },
			to: { x: 10, y: 12 },
		});
	});
});
