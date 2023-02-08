import bcrypt from "bcrypt";
import mongoose from "mongoose";
import IAccount from "../entities/account";

const accountSchema = new mongoose.Schema<IAccount>(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "Account", timestamps: true }
);

// Khi lưu document, mã hóa mật khẩu sẽ được tiến hành
accountSchema.pre("save", async function (next) {
  let user = this;
  try {
    if (!user.isModified("password")) {
      next();
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (err) {
    console.log("Mã hóa mật khẩu thất bại");
    console.log(err);
  }
});

export default accountSchema;
