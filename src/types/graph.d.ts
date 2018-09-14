export const typeDefs = ["type User {\n  uuid: String!\n  tag: String!\n  name: String!\n  email: String!\n  bp: Int\n  sp: Int\n  icon: String\n  certify: Boolean!\n}\n\ntype Query {\n  myinfo: User\n  user(uuid: String!): User\n  welcome(yourNickname: String): String!\n}\n\ntype AuthResult {\n  token: String!\n  user: User\n}\n\ntype Mutation {\n  signup(email: String!, name: String!, password: String!): Boolean!\n  login(email: String!, password: String!): AuthResult!\n  certify(code: String!): Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  myinfo: User | null;
  user: User | null;
  welcome: string;
}

export interface UserQueryArgs {
  uuid: string;
}

export interface WelcomeQueryArgs {
  yourNickname: string | null;
}

export interface User {
  uuid: string;
  tag: string;
  name: string;
  email: string;
  bp: number | null;
  sp: number | null;
  icon: string | null;
  certify: boolean;
}

export interface Mutation {
  signup: boolean;
  login: AuthResult;
  certify: boolean;
}

export interface SignupMutationArgs {
  email: string;
  name: string;
  password: string;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface CertifyMutationArgs {
  code: string;
}

export interface AuthResult {
  token: string;
  user: User | null;
}
