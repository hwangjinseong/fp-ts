import { Option, Some } from "./Option";

export declare const isSome: <A>(fa: Option<A>) => fa is Some<A>;
