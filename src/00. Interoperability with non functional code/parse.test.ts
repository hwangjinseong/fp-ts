import { isLeft, isRight } from "fp-ts/lib/Either";
import { parse } from "./parse";

describe("parse 함수 테스트", () => {
  it("문자열을 JSON 객체로 변환해야 합니다", () => {
    const json = '{"foo": 1}';
    const result = parse(json);

    expect(isRight(result)).toBeTruthy();
    expect(isRight(result) ? result.right : undefined).toEqual({ foo: 1 });
  });

  it("문자열이 유효한 JSON이 아니면 오류를 반환해야 합니다", () => {
    const json = "{foo: 1}";
    const result = parse(json);

    expect(isLeft(result)).toBeTruthy();
    expect(isLeft(result) ? result.left : undefined).toBeInstanceOf(Error);
  });
});
