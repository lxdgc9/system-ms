import mongoose from "mongoose";
import IProfile from "../entities/profile";

const profileSchema = new mongoose.Schema<IProfile>(
  {
    fullName: {
      type: String,
      trim: true,
      uppercase: true,
      required: [true, "Yêu cầu tên người dùng"],
    },
    dob: {
      type: Date,
      required: [true, "Yêu cầu ngày tháng năm sinh"],
    },
    gender: {
      type: String,
      trim: true,
      enum: {
        values: ["male", "female"],
        message: "Giới tính không hợp lệ",
      },
      required: [true, "Yêu cầu giới tính"],
    },
    phone: {
      type: String,
      required: [true, "Yêu càu số điện thoại"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Yêu càu email"],
    },
    idCard: {
      no: {
        type: String,
        required: [true, "Yêu cầu số căn cước công dân"],
      },
      place: {
        type: String,
        required: [true, "Yêu cầu nơi cấp căn cước"],
      },
      date: {
        type: Date,
        required: [true, "Yêu cầu ngày cấp căn cước"],
      },
    },
    address: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
    },
    salary: {
      type: Number,
      min: [0, "Mức lương không hợp lệ"],
      required: [true, "Yêu cầu mức lương"],
    },
    allowance: {
      type: Number,
      min: [0, "Phụ cấp không hợp lệ"],
    },
  },
  { collection: "Profile", timestamps: true }
);

export default profileSchema;
