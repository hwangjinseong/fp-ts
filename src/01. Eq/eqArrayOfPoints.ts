import { getEq } from "fp-ts/lib/Array";
import { Point, eqPoint } from "./eqPoint";
import { Eq } from "./eq";

export const eqArrayOfPoints: Eq<Array<Point>> = getEq(eqPoint);
