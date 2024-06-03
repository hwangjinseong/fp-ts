import { getOlder } from "./getOlder";

describe("getOlder", () => {
	it("byAge 인스턴스를 사용하여 더 나이 많은 User 를 반환해야 합니다.", () => {
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

		expect(getOlder(age20User, age20User2)).toBe(age20User);
		expect(getOlder(age20User, age30User)).toBe(age30User);
		expect(getOlder(age30User, age20User)).toBe(age30User);
	});
});
