export interface Eq<A> {
  /** `x`가 `y`와 같으면 `true`를 반환합니다 */
  readonly equals: (x: A, y: A) => boolean;
}
