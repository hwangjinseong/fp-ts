import { Either, Left } from "./Either";

/**
 * Either가 `Left`의 인스턴스인 경우 `true`를 반환하고, 그렇지 않은 경우 `false`를 반환합니다.
 */
export declare const isLeft: <E>(ma: Either<E, unknown>) => ma is Left<E>;
