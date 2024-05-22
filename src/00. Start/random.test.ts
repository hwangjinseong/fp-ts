import { random } from "./random";

describe("random", () => {
  it("랜덤한 숫자를 반환해야 합니다.", () => {
    const result = random();

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1);
  });
});
