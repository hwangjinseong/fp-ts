/**
 * `Semigroup` 은 `A` 가 비어있지 않은 집합이고, `*` 이 `A` 에 대한 이진 연산인 쌍 `(A, *)` 입니다.
 *
 * 즉, A 의 두 요소를 받아 A 를 반환하는 함수입니다.
 * ```
 * *: (x: A, y: A) => A
 * ```
 *
 * ---
 *
 * 이 때 `*` 는 결합법칙을 만족해야 합니다.
 * ```
 * (x * y) * z = x * (y * z)
 * ```
 *
 * 위 식이 만족한다는 것은 괄호로 묶는 것에 대한 것을 걱정할 필요가 없이,
 * `x * y * z` 를 쓸 수 있다는 것을 의미합니다.
 *
 * ---
 *
 * **Semigroup 예시**
 * - `(number, *)` : `*` 연산은 숫자의 곱입니다.
 * - `(string, +)` : `+` 연산은 문자열의 결합입니다.
 * - `(boolean, &&)` : `&&` 연산은 논리곱입니다.
 */
export interface Semigroup<A> {
	concat: (x: A, y: A) => A;
}
