import { getApplicativeMonoid } from "fp-ts/lib/Applicative";
import { Applicative } from "fp-ts/lib/Option";
import { monoidSum } from "./monoidSum";

// `getApplicativeMonoid` 함수를 사용하여 `Applicative`와 `monoidSum`을 결합한 Applicative Monoid를 생성하고 내보냅니다.
// 이렇게 생성된 `appliedMonoidSum`은 Applicative와 Monoid의 모든 연산을 제공합니다.
export const appliedMonoidSum = getApplicativeMonoid(Applicative)(monoidSum);
