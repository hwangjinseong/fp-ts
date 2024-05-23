import { Ord } from "./ord";

// min 함수는 제네릭 타입 A와 Ord<A> 인터페이스를 인자로 받습니다.
// Ord<A> 인터페이스는 두 값의 순서를 비교하는 compare 메서드를 가지고 있습니다.
export const min =
	<A>(O: Ord<A>): ((x: A, y: A) => A) =>
	(x, y) =>
		// compare 메서드를 사용하여 x와 y를 비교합니다. compare 메서드는 x가 y보다 크면 1을, x와 y가 동일하면 0을, x가 y보다 작으면 -1을 반환합니다.
		// 따라서, compare 메서드의 결과가 1이면 y를, 그렇지 않으면 x를 반환합니다. 즉, x와 y 중에서 더 작은 값을 반환합니다.
		O.compare(x, y) === 1 ? y : x;
