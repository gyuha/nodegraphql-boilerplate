import * as path from "path";
import { GraphQLServerLambda } from "graphql-yoga";
import { middlewareLoggedIn } from "./middlewares/isLoggedIn";

import { mergeResolvers, fileLoader } from "merge-graphql-schemas";

import * as user from "./api/user/user.resolvers";
import * as welcome from "./api/welcome/welcome.resolvers";

/**
 * resolvers loader
 */
const resolversArray: string[] = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*")
);
const resolvers = mergeResolvers(resolversArray);

const lambda = new GraphQLServerLambda({
  typeDefs: `${__dirname}/schema.graphql`,
  resolvers,
  context: req => ({ ...req }),
  middlewares: [middlewareLoggedIn]
});

export default lambda;
