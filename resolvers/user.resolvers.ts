import { signup } from "../handlers/users/signup";
import { login } from "../handlers/users/login";
import { certify } from "../handlers/users/certify";
import { user } from "../handlers/users/user";

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
