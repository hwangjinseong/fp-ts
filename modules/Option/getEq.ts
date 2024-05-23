import { Eq } from "fp-ts/lib/Eq";
import { Option } from ".";

export declare const getEq: <A>(E: Eq<A>) => Eq<Option<A>>;
