import { Option, fromNullable } from "fp-ts/lib/Option";

export function find<A>(as: Array<A>, predicate: (a: A) => boolean): Option<A> {
  /** 풀이
   * return as.find(predicate) === undefined ? none : some(as.find(predicate));
   */
  return fromNullable(as.find(predicate));
}
