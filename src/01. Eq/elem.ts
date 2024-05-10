import { Eq } from "../modules/Eq/Eq";

export function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
  return (a, as) => as.some((item) => E.equals(item, a));
}
