import { User } from "../../models/user";
import config from "../../config";

// 이메일 인증
export async function certify(code: string) {
  let user;
  try {
    user = await User.queryOne("uuid")
      .eq(code)
      .exec();
  } catch (err) {
    throw new Error(err.toString());
  }

  if (!user) {
    throw new Error("사용자를 찾을 수 없습니다.");
  }

  if (user.certify === true) {
    throw new Error("이미 인증 된 사용자 입니다.");
  }

  try {
    let data = User.update({ uuid: code }, { certify: true });
    console.log(data);
  } catch (err) {
    throw new Error(err.toString());
  }

  return true;
}
