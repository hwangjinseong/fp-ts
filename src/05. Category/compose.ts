// f: A -> B
// g: B -> C
// h: A -> C

// 두 개의 함수 `g`와 `f`를 받아들이고, 그 두 함수를 합성하는 새로운 함수를 반환합니다.
export const compose =
	<A, B, C>(g: (b: B) => C, f: (a: A) => B): ((a: A) => C) =>
	(a) =>
		g(f(a));
