import { Eq } from "../01. Eq/eq";

// Ordering은 -1, 0, 1 중 하나의 값만 가질 수 있는 타입입니다.
// 보통 비교 함수에서 사용되며, -1은 x가 y보다 작음, 0은 x와 y가 같음, 1은 x가 y보다 큼을 나타냅니다.
type Ordering = -1 | 0 | 1;

// Ord 인터페이스를 정의합니다. 이 인터페이스는 Eq 인터페이스를 확장하고, 두 값 x와 y를 비교하는 compare 메서드를 추가로 정의합니다.
// compare 메서드는 x와 y를 비교하여 x가 y보다 작으면 -1, x와 y가 같으면 0, x가 y보다 크면 1을 반환합니다.
export interface Ord<A> extends Eq<A> {
	compare: (x: A, y: A) => Ordering;
}
