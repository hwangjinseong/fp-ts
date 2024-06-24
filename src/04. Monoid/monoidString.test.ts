describe("monoidString", () => {
	it("should be a monoid", () => {
		const monoidString = {
			concat: (a: string, b: string) => a + b,
			empty: "",
		};

		expect(monoidString.concat("a", monoidString.empty)).toBe("a");
		expect(monoidString.concat(monoidString.empty, "a")).toBe("a");
		expect(
			monoidString.concat(monoidString.empty, monoidString.empty)
		).toBe("");
	});
});
