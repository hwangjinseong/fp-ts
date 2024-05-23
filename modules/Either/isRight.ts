import { Either, Right } from ".";

/**
 * Either가 `Right`의 인스턴스인 경우 `true`를 반환하고, 그렇지 않은 경우 `false`를 반환합니다.
 */
export declare const isRight: <A>(ma: Either<unknown, A>) => ma is Right<A>;
