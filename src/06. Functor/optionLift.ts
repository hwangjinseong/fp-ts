import { Option, isNone, none, some } from "fp-ts/lib/Option";

/**
 * `optionLift` 함수는 함수 `g`를 받아들이고, `g`를 `Option`에 적용하는 새로운 함수를 반환합니다.
 * 이 함수는 제네릭 타입 `B`, `C`를 사용하여 다양한 타입의 함수와 `Option`을 처리할 수 있습니다.
 */
export const optionLift =
	<B, C>(g: (b: B) => C): ((fb: Option<B>) => Option<C>) =>
	(fb) =>
		isNone(fb) ? none : some(g(fb.value));
