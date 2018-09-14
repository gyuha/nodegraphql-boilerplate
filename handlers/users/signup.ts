import { User } from "../../models/user";
import { sendMail } from "../../utils/sendEmail";
import * as handlebars from "handlebars";

import { existUserField, basicAuthSchema, nameSchema } from "./common";
import * as shortid from "shortid";
import * as bcrypt from "bcrypt";

// 회원 인증 메일 발송
function certifyMailSend(name: string, email: string, tag: string) {
  let fs = require("fs");
  let temp = fs.readFile("./templates/emailCerti.html", "utf8", function(
    err,
    temp
  ) {
    let template = handlebars.compile(temp);
    let to = name + " <" + email + ">";
    let url: string = process.env.SITE_HOME + "/auth/certi/" + tag;
    var html = template({ name, email, url });
    sendMail(to, "GGF 회원 가입을 축하드립니다.", html);
  });
}

// 회원 가입
export async function signup(email: string, name: string, password: string) {
  try {
    await basicAuthSchema.validate({ email, password });
  } catch (err) {
    throw new Error(err.toString());
  }

  try {
    console.log(name);
    await nameSchema.validate({ name });
  } catch (err) {
    throw new Error(err.toString());
  }

  if (await existUserField("email", email)) {
    throw new Error("이미 사용중인 이메일 입니다.");
  }

  if (await existUserField("name", name)) {
    throw new Error("이미 사용중인 닉네임 입니다.");
  }

  let uuid = shortid.generate();
  password = bcrypt.hashSync(password, 10);

  let user = new User({ uuid, email, name, tag: uuid, password });
  try {
    await user.save();
  } catch (err) {
    throw new Error(err.toString());
  }

  certifyMailSend(name, email, uuid);

  return true;
}
