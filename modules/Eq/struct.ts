import { Eq } from "fp-ts/lib/Eq";

// struct 함수는 A의 각 키에 대한 값을 비교하는 방법을 정의하는 Eq 인스턴스를 사용하여, A의 각 키에 대한 값을 가지는 객체를 비교하는 Eq 인스턴스를 생성합니다.
export declare const struct: <A>(eqs: { [K in keyof A]: Eq<A[K]> }) => Eq<{
	readonly [K_1 in keyof A]: A[K_1];
}>;
