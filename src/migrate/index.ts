import dynamoose from "../models/db";
import { UserSchema } from "../models/user";

async function createTables() {
  console.log("create users table...");
  await dynamoose.model("users", UserSchema, { create: true });
  console.log("create users table complete.");
}

createTables();
