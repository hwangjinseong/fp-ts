import { fromCompare } from "fp-ts/lib/Ord";
import { Ord } from "./ord";

// 이 객체는 숫자를 비교하기 위한 equals와 compare 메서드를 구현합니다.
export const ordNumber: Ord<number> = {
	// equals 메서드는 두 숫자 x와 y가 동일한지 확인합니다. x와 y가 동일하면 true를, 그렇지 않으면 false를 반환합니다.
	equals: (x, y) => x === y,
	// compare 메서드는 두 숫자 x와 y를 비교합니다. x가 y보다 작으면 -1을, x가 y보다 크면 1을, x와 y가 동일하면 0을 반환합니다.
	compare: (x, y) => (x < y ? -1 : x > y ? 1 : 0),
};

// fromCompare 헬퍼 함수로 Ord 를 쉽게 정의할 수 있습니다.
export const _ordNumber: Ord<number> = fromCompare((x, y) =>
	x < y ? -1 : x > y ? 1 : 0
);
