import { Either } from "fp-ts/lib/Either";
import { IO } from "fp-ts/lib/IO";

export interface IOEither<E, A> extends IO<Either<E, A>> {}
