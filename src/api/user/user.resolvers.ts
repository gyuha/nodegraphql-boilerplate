import { signup } from "./signup";
import { login } from "./login";
import { certify } from "./certify";
import { user } from "./user";

export default {
  Query: {
    myinfo: ({ uuid }, _) => user(uuid),
    user: (_, { uuid }) => user(uuid)
  },
  Mutation: {
    signup: (_, { email, name, password }) => signup(email, name, password),
    login: (_, { email, password }) => login(email, password),
    certify: (_, { code }) => certify(code)
  }
};
