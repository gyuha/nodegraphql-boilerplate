import * as dynamoose from "dynamoose";
import config from "../config";

dynamoose.AWS.config.update(config.aws);
dynamoose.setDefaults({ prefix: "" });

if (process.env.NODE_DEV === "dev") {
  console.log("=> load local db..");
  dynamoose.local("http://localhost:8000");
}

export default dynamoose;
