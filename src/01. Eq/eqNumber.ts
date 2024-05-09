import { Eq } from "../modules/Eq/Eq";

export const eqNumber: Eq<number> = {
  equals: (x, y) => x === y,
};
