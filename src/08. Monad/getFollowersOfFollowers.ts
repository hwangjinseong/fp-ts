import { flatten } from "fp-ts/lib/Array";
import { getFollowers } from "./getFollowers";
import { User } from "./User";

// Array<User> 으로 반환해야하기 때문에 flatten 으로 데이터를 평평하게 변환
export const getFollowersOfFollowers = (user: User): Array<User> =>
	flatten(getFollowers(user).map(getFollowers));
