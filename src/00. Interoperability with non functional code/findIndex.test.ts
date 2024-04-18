import { getEq, isNone, isSome, none, some } from "fp-ts/lib/Option";
import * as N from "fp-ts/number";
import { findIndex } from "./findIndex";

describe("findIndex", () => {
  const array: number[] = [1, 2, 3, 5];

  const E = getEq(N.Eq);

  it("요소를 찾으면 some을 반환해야 합니다.", () => {
    const result = findIndex(array, (a) => a === 1);
    expect(isSome(result)).toBeTruthy();
    expect(E.equals(result, some(0))).toBeTruthy();
  });

  it("요소를 찾지 못하면 none을 반환해야 합니다.", () => {
    const result = findIndex(array, (a) => a === 4);
    expect(isNone(result)).toBeTruthy();
    expect(E.equals(result, none)).toBeTruthy();
  });
});
