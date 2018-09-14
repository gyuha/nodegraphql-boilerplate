import db from "./db";
import dynamoose from "./db";

export const UserSchema = new db.Schema(
  {
    uuid: {
      type: String,
      hasKey: true
    },
    role: {
      type: Number,
      default: 100
    },
    name: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ""
    },
    certify: {
      type: Boolean,
      default: false
    },
    password: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  },
  {
    throughput: { read: 1, write: 1 },
    timestamps: true
  }
);

export const User = dynamoose.model("users", UserSchema);
