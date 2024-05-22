import { Eq } from "../../01. Eq/eq";
import { Option } from "./Option";

export declare const getEq: <A>(E: Eq<A>) => Eq<Option<A>>;
