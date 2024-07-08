import { f, g, h } from "./hfg";

describe("hfg", () => {
	it("f 함수는 문자열의 길이를 반환합니다.", () => {
		expect(f("hello")).toBe(5);
		expect(f("hi")).toBe(2);
		expect(f("")).toBe(0);
	});

	it("g 함수는 숫자가 2보다 큰지 확인합니다.", () => {
		expect(g(3)).toBe(true);
		expect(g(2)).toBe(false);
		expect(g(1)).toBe(false);
	});

	it("h 함수는 문자열을 받아서 길이를 구하고, 그 길이가 2보다 큰지 확인합니다.", () => {
		expect(h("hello")).toBe(true);
		expect(h("hi")).toBe(false);
		expect(h("")).toBe(false);
	});
});
