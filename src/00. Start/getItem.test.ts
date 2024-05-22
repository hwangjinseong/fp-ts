import { getEq, isNone, isSome, none, some } from "fp-ts/lib/Option";
import * as S from "fp-ts/string";
import { getItem } from "./getItem";

describe("getItem", () => {
  // localStorage.getItem 함수를 Mocking 합니다.
  window.localStorage.__proto__.getItem = jest.fn((key) => {
    if (key === "existingKey") return "value";
    return null;
  });

  const equalityCheck = getEq(S.Eq);

  it("localStorage에 키가 존재하는 경우 값을 반환해야 합니다", () => {
    const result = getItem("existingKey")();

    expect(isSome(result)).toBeTruthy();
    expect(equalityCheck.equals(result, some("value"))).toBeTruthy();
  });

  it("localStorage에 키가 존재하지 않는 경우 None을 반환해야 합니다", () => {
    const result = getItem("nonExistingKey")();

    expect(isNone(result)).toBeTruthy();
    expect(equalityCheck.equals(result, none)).toBeTruthy();
  });
});
