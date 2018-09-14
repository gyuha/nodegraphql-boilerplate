import * as jwt from "jsonwebtoken";
import config from "../config";

/**
 * 로그인이 필요로 한 곳에 넣어 준다.
 */
export const middlewareLoggedIn = {
  Query: {
    myinfo: isLoggedIn
  }
  // Mutation: {
  //   login: isLoggedIn
  // }
};

export async function isLoggedIn(resolve, parent, args, ctx, info) {
  console.log(ctx.event.headers.Authorization);
  let token = ctx.event.headers.Authorization;

  let decode;
  try {
    decode = await jwt.verify(token, config.jwt_secret);
  } catch (err) {
    throw new Error(`인증이 필요 합니다.`);
  }

  return resolve({ uuid: decode.uuid, tag: decode.tag });
}
