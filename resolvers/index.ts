import * as path from "path";
import { mergeResolvers, fileLoader } from "merge-graphql-schemas";

/**
 * !NOTE
 * 파일을 추가 하면 여기에도 꼭 넣어 줘야 함
 * 그래야 컴파일 이후에 작동 함
 */
import * as user from "./user.resolvers"
import * as welcome from "./welcome.resolvers"

/* MANUAL APPROACH: Update this file manually with each resolver file */
// import userResolvers from "./user.resolvers";
// import welcomeResolvers from "./welcome.resolvers";
// const resolversArray = [userResolvers, welcomeResolvers];

/*  AUTOMATED APPROACH: Put your resolvers anywhere 
    with ".resolvers.[js/ts]" naming convention */

const resolversArray = fileLoader(path.join(__dirname, "./**/*.resolvers.*"), { recursive: true });
const resolvers = mergeResolvers(resolversArray);

export default resolvers;
