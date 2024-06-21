import { semigroupProduct } from "../03. Semigroup/semigroupProduct";
import { Monoid } from "./Monoid";

// `monoidProduct`를 정의하고 내보냅니다. 이는 숫자의 곱셈에 대한 Monoid 인스턴스입니다.
// `semigroupProduct`의 모든 속성을 가져오고, 'empty' 요소를 1로 설정합니다.
// 'empty' 요소는 곱셈의 항등원이므로, 어떤 숫자와 1을 곱해도 그 숫자가 그대로 유지되는 성질을 이용합니다.
export const monoidProduct: Monoid<number> = {
	...semigroupProduct,
	empty: 1,
};
