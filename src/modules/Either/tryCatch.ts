import { LazyArg } from "../function/LazyArg";
import { Either } from "./Either";

export declare const tryCatch: <E, A>(
  f: LazyArg<A>,
  onThrow: (e: unknown) => E
) => Either<E, A>;
