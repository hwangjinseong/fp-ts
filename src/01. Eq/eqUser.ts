import { contramap } from "fp-ts/lib/Eq";
import { eqNumber } from "./eqNumber";

type User = {
	userId: number;
	name: string;
};

export const eqUser = contramap((user: User) => user.userId)(eqNumber);
