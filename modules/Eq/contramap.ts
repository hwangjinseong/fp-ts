import { Eq } from "fp-ts/lib/Eq";

// contramap 함수는 B 타입의 값을 A 타입의 값으로 변환하는 함수 f를 사용하여, A 타입의 값을 비교하는 Eq<A> 인터페이스를 B 타입의 값을 비교하는 Eq<B> 인터페이스로 변환합니다.
export declare const contramap: <A, B>(f: (b: B) => A) => (fa: Eq<A>) => Eq<B>;
