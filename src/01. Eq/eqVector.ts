import { Eq, struct } from "fp-ts/lib/Eq";
import { Point, eqPoint } from "./eqPoint";

type Vector = {
  from: Point;
  to: Point;
};

export const eqVector: Eq<Vector> = struct({
  from: eqPoint,
  to: eqPoint,
});
