import { eqArrayOfPoints } from "./eqArrayOfPoints";

describe("eqArrayOfPoints", () => {
  it("두 점이 동일한 경우 true를 반환해야 합니다", () => {
    expect(
      eqArrayOfPoints.equals(
        [
          { x: 1, y: 2 },
          { x: 1, y: 2 },
        ],
        [
          { x: 1, y: 2 },
          { x: 1, y: 2 },
        ]
      )
    ).toBeTruthy();
  });

  it("두 점이 다른 경우 false를 반환해야 합니다", () => {
    expect(
      eqArrayOfPoints.equals(
        [
          { x: 1, y: 2 },
          { x: 1, y: 2 },
        ],
        [
          { x: 2, y: 3 },
          { x: 2, y: 3 },
        ]
      )
    ).toBeFalsy();
  });
});
