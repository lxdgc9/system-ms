import mongoose from "mongoose";
import IUser from "../entities/user";

const userSchema = new mongoose.Schema<IUser>(
  {
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account",
      required: true,
    },
  },
  { collection: "User", timestamps: true }
);

export default userSchema;
