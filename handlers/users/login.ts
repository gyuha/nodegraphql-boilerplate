import { User } from "../../models/user";
import { basicAuthSchema, makeToken } from "./common";
import * as bcrypt from "bcrypt";
import * as joi from "joi";
interface ILoginResult {
  token?: string;
  user?: any;
}

// 로그인
export async function login(email: string, password: string) {
  try {
    await basicAuthSchema.validate({ email, password });
  } catch (err) {
    console.log("TCL: }catch -> err", err);
    throw new Error(err.toString());
  }

  let data;
  try {
    data = await User.scan("email")
      .eq(email)
      .exec();
  } catch (err) {
    throw new Error(err.toString());
  }

  if (data.count === 0) {
    throw new Error(`사용자를 찾을 수 없습니다.`);
  }

  if (!bcrypt.compareSync(password, data[0].password)) {
    throw new Error(`아이디와 암호를 다시 확인해 주세요`);
  }

  let udata = data[0];

  return {
    token: makeToken(udata.uuid, udata.tag),
    user: { ...udata }
  } as ILoginResult;
}
