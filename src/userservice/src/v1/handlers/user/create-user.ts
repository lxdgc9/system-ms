import express from "express";
import { validationResult } from "express-validator";
import HttpException from "../../../type/http-exception";
import CreateUserDto from "../../dtos/user/create-user-dto";
import ProfileModel from "../../models/profile";
import UserModel from "../../models/user";

async function createUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  const {
    username,
    password,
    fullName,
    dob,
    gender,
    phone,
    email,
    noIdCard,
    placeIdCard,
    dateIdCard,
    address,
    description,
    salary,
    allowance,
  }: CreateUserDto = req.body;
  try {
    // Ràng buộc đầu vào
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      const err: HttpException = {
        name: "Lỗi ràng buộc đầu vào",
        statusCode: 400,
        message: errs.array()[0].msg,
      };
      throw err;
    }

    // Kiểm tra username đã sử dụng hay chưa
    const user = await UserModel.findOne({ username });
    if (user) {
      const err: HttpException = {
        name: "Username đã sử dụng",
        statusCode: 400,
        message: "Tên tài khoản đã được sử dụng",
      };
      throw err;
    }

    // Tạo hồ sơ
    const newProfile = new ProfileModel({
      fullName,
      dob,
      gender,
      phone,
      email,
      idCard: {
        no: noIdCard,
        place: placeIdCard,
        date: dateIdCard,
      },
      address,
      description,
      salary,
      allowance,
    });

    // Tạo người dùng
    const newUser = new UserModel({
      username,
      password,
      profile: newProfile.id,
    });

    await newUser.save();
    await newProfile.save();

    res.status(201).json({
      status: true,
      message: "Tạo tài khoản thành công",
      user: newUser,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export default createUser;
