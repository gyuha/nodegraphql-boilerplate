import { User } from "../../models/user";

// 사용자 정보 가져 오기
export async function user(uuid: string) {
  let data;
  try {
    data = await User.get(uuid);
  } catch (err) {
    throw new Error(err.toString());
  }
  return data;
}
