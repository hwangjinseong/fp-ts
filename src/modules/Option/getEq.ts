import { Eq } from "../Eq/Eq";
import { Option } from "./Option";

export declare const getEq: <A>(E: Eq<A>) => Eq<Option<A>>;
