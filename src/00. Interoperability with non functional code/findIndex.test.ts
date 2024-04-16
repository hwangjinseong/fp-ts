import { none, some } from "fp-ts/Option";
import { findIndex } from "./findIndex";

describe("findIndex", () => {
  it("요소를 찾지 못하면 none을 반환해야 합니다.", () => {
    const as = [1, 2, 3, 4, 5];
    const predicate = (a: number) => a > 5;

    const result = findIndex(as, predicate);

    expect(result).toEqual(none);
  });

  it("요소를 찾으면 some을 반환해야 합니다.", () => {
    const as = [1, 2, 3, 4, 5];
    const predicate = (a: number) => a === 3;

    const result = findIndex(as, predicate);

    expect(result).toEqual(some(2));
  });
});
