import { Either, tryCatch } from "fp-ts/Either";

/**
 * parse 함수는 문자열을 입력받아 JSON 객체로 변환합니다.
 * 변환에 성공하면 변환된 JSON 객체를 포함하는 Right를 반환합니다.
 * 변환에 실패하면 발생한 오류를 포함하는 Left를 반환합니다.
 */
export function parse(s: string): Either<Error, unknown> {
  return tryCatch(
    /** try 부분에서는 입력받은 문자열을 JSON.parse를 이용해 JSON 객체로 변환합니다. */
    () => JSON.parse(s),
    /** catch 부분에서는 변환 과정에서 발생한 오류를 새 Error 객체로 감싸 반환합니다. */
    (reason) => new Error(String(reason))
  );
}
