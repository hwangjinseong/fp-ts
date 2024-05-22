import { eqUser } from "./eqUser";

describe("eqUser", () => {
	it("유저가 동일하면 true를 반환해야 합니다.", () => {
		const user1 = { userId: 1, name: "Kim" };
		const user2 = { userId: 1, name: "Kim" };

		expect(eqUser.equals(user1, user2)).toBeTruthy();
	});

	it("유저가 동일하지 않으면 false를 반환해야 합니다.", () => {
		const user1 = { userId: 1, name: "Kim" };
		const user2 = { userId: 2, name: "Lee" };

		expect(eqUser.equals(user1, user2)).toBeFalsy();
	});
});
