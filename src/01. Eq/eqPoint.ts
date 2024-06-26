import { Eq } from "./eq";

export type Point = {
	x: number;
	y: number;
};

export const eqPoint: Eq<Point> = {
	equals: (p1, p2) => p1.x === p2.x && p1.y === p2.y,
};
