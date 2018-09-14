require("dotenv").config();

import { GraphQLServerLambda } from "graphql-yoga";
import { default as typeDefs } from "./typeDefs";
import { default as resolvers } from "./resolvers";
import { middlewareLoggedIn } from "./middlewares/isLoggedIn";

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
  context: req => ({ ...req }),
  middlewares: [middlewareLoggedIn]
});

export const handler = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
