const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
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

// Hàm kiểm tra password
accountSchema.methods = {
  comparePassword: async function (candidatePassword) {
    const user = this;
    try {
      const isMatch = await bcrypt.compare(candidatePassword, user.password);
      return isMatch;
    } catch (err) {
      console.log("Kiểm tra mật khẩu thất bại");
      console.log(err);
      return false;
    }
  },
};

module.exports = accountSchema;
