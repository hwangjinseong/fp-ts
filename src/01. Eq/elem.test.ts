describe("elem", () => {
  it("두 숫자가 동일한 경우 true를 반환해야 합니다", () => {
    expect(elem(eqNumber)(1, [1, 2, 3])).toBe(true);
  });

  it("두 숫자가 다른 경우 false를 반환해야 합니다", () => {
    expect(elem(eqNumber)(4, [1, 2, 3])).toBe(false);
  });
});
