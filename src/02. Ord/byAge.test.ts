import { byAge } from "./byAge";

describe("byAge", () => {
	it("byAge로 User age 비교해서 반환해야 합니다.", () => {
		const age20User = {
			name: "userA",
			age: 20,
		};

		const age20User2 = {
			name: "userB",
			age: 20,
		};

		const age30User = {
			name: "userC",
			age: 30,
		};

		expect(byAge.compare(age20User, age20User2)).toBe(0);
		expect(byAge.compare(age20User, age30User)).toBe(-1);
		expect(byAge.compare(age30User, age20User)).toBe(1);
	});
});
