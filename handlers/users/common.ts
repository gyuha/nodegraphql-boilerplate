import { User } from "../../models/user";
import * as joi from "joi";
import * as jwt from "jsonwebtoken";

// 이미 사용하고 있는 이메일 인지 체크
export async function existUserField(field: string, value: string) {
  let data;
  try {
    data = await User.scan(field)
      .eq(value)
      .exec();
  } catch (err) {
    return false;
  }

  return data.count > 0 ? true : false;
}

export const basicAuthSchema = joi.object().keys({
  email: joi
    .string()
    .email()
    .required()
    .error(new Error("정확한 이메일 주소를 넣어 주세요.")),
  password: joi
    .string()
    .required()
    .regex(/^(?=.*?[a-z|A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)
    .error(new Error("암호는 6자이상 영문,숫자,특수문자 조합으로 가능 합니다."))
});

export const nameSchema = joi.object().keys({
  name: joi
    .string()
    .required()
    .min(2)
    .max(20)
    .regex(/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-zA-Z0-9]*$/)
    .error(
      new Error("닉네임은 2자에서 20자까지 한글영문숫자만 입력이 가능 합니다.")
    )
});

export function makeToken(uuid: string, tag: string): string {
  let config = require("../../config").default;
  return jwt.sign({ uuid: uuid, tag: tag }, config.jwt_secret, {});
}
