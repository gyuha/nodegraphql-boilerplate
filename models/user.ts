import db from "./db";
import dynamoose from "./db";

export const UserSchema = new db.Schema(
  {
    uuid: {
      type: String,
      hasKey: true
    },
    bp: {
      type: Number,
      default: 10000
    },
    sp: {
      type: Number,
      default: 10000
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
    throughput: { read: 15, write: 5 },
    timestamps: true
  }
);

export const User = dynamoose.model("users", UserSchema);
