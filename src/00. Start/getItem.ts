import { Option, fromNullable } from "fp-ts/lib/Option";
import { IO } from "fp-ts/lib/IO";

export function getItem(key: string): IO<Option<string>> {
  return () => fromNullable(localStorage.getItem(key));
}
