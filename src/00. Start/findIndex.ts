import { Option, none, some } from "fp-ts/lib/Option";

// 만약 찾지 못하면 none을 반환하고, 찾으면 해당 인덱스를 감싼 some을 반환합니다.
export function findIndex<A>(
  as: Array<A>, // 검색할 배열
  predicate: (a: A) => boolean // 각 요소에 적용할 술어 함수
): Option<number> {
  // 반환 타입은 Option<number>. 찾지 못하면 none, 찾으면 some(index)
  const index = as.findIndex(predicate); // 배열에서 술어 함수를 만족하는 첫 번째 요소의 인덱스를 찾습니다.

  // 찾은 인덱스가 -1이면 none을 반환하고, 그렇지 않으면 찾은 인덱스를 감싼 some을 반환합니다.
  return index === -1 ? none : some(index);
}
