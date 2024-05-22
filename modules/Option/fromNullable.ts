import { Option } from "./Option";

/**
 * nullable 유형에서 새로운 `Option`을 생성합니다. 값이 'null' 또는 'undefine'이면 'None'을 반환하고
 * 그렇지 않으면 `Some`에 포함된 값을 반환합니다.
 *
 * @example
 * import { none, some, fromNullable } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(fromNullable(undefined), none)
 * assert.deepStrictEqual(fromNullable(null), none)
 * assert.deepStrictEqual(fromNullable(1), some(1))
 */
export declare const fromNullable: <A>(a: A) => Option<NonNullable<A>>;
