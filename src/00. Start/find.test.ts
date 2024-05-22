import { getEq, isSome, some } from "fp-ts/lib/Option";
import * as N from "fp-ts/number";
import { find } from "./find";

describe("find", () => {
  const array: number[] = [1, 2, 3, 5];

  const E = getEq(N.Eq);

  it("요소를 찾으면 some을 반환해야 합니다.", () => {
    const result = find(array, (a) => a === 1);
    expect(isSome(result)).toBeTruthy();
    expect(E.equals(result, some(1))).toBeTruthy();
  });

  it("요소를 찾지 못하면 none을 반환해야 합니다.", () => {
    const result = find(array, (a) => a === 4);
    expect(isSome(result)).toBeFalsy();
    expect(E.equals(result, some(4))).toBeFalsy();
  });
});
