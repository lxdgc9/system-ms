import mongoose from "mongoose";
import IUser from "../entities/user";

const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      trim: true,
      lowercase: true,
      index: true,
      unique: true,
      required: [true, "Yêu cầu tên người dùng"],
    },
    password: {
      type: String,
      required: [true, "Yêu cầu mật khẩu"],
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "profile",
      required: [true, "Yêu cầu hồ sơ người dùng"],
    },
  },
  { collection: "User", timestamps: true }
);

export default userSchema;
