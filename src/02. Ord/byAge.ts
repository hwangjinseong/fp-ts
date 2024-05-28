import { contramap, fromCompare } from "fp-ts/lib/Ord";
import { Ord } from "./ord";
import { ordNumber } from "./ordNumber";

type User = {
	name: string;
	age: number;
};

// byAge 객체는 User 타입의 값을 그들의 age 속성의 값에 따라 비교합니다.
export const byAge: Ord<User> = contramap((user: User) => user.age)(ordNumber);

// fromCompare 헬퍼 함수로 Ord 를 쉽게 정의할 수 있습니다.
export const _byAge: Ord<User> = fromCompare((x, y) =>
	ordNumber.compare(x.age, y.age)
);
