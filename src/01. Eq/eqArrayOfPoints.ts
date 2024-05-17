import { getEq } from "fp-ts/Array";
import { Eq } from "fp-ts/lib/Eq";
import { Point, eqPoint } from "./eqPoint";

export const eqArrayOfPoints: Eq<Array<Point>> = getEq(eqPoint);
