import * as path from "path";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";

const defPath = process.env.NODE_ENV === "dev" ? 
    path.join(__dirname.split("/").slice(0, -2).join("/") + "/typeDefs","."):
    path.join(__dirname, ".");
const typesArray = fileLoader(defPath, { recursive: true });
const typesMerged = mergeTypes(typesArray, { all: true });

export default typesMerged;
