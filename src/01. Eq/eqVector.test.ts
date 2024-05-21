import { eqVector } from "./eqVector";

describe("eqVector", () => {
	it("벡터가 동일하면 true를 반환해야 합니다.", () => {
		const vector1 = { from: { x: 1, y: 2 }, to: { x: 3, y: 4 } };
		const vector2 = { from: { x: 1, y: 2 }, to: { x: 3, y: 4 } };

		expect(eqVector.equals(vector1, vector2)).toBeTruthy();
	});

	it("벡터가 동일하지 않으면 false를 반환해야 합니다.", () => {
		const vector1 = { from: { x: 1, y: 2 }, to: { x: 3, y: 4 } };
		const vector2 = { from: { x: 1, y: 2 }, to: { x: 3, y: 5 } };

		expect(eqVector.equals(vector1, vector2)).toBeFalsy();
	});
});
