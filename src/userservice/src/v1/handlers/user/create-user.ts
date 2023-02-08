import express from "express";
import { validationResult } from "express-validator";
import HttpException from "../../../type/http-exception";
import CreateUserDto from "../../dtos/user/create-user";
import AccountModel from "../../models/account";
import UserModel from "../../models/user";

async function createUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  const { username, password }: CreateUserDto = req.body;
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
    const account = await AccountModel.findOne({ username });
    if (account) {
      const err: HttpException = {
        name: "Username đã sử dụng",
        statusCode: 400,
        message: "Tên tài khoản đã được sử dụng",
      };
      throw err;
    }

    // Tạo account cho người dùng
    const newAccount = new AccountModel({ username, password });
    await newAccount.save();

    // Tạo người dùng
    const newUser = new UserModel({ account: newAccount.id });
    await newUser.save();

    // Ok, gửi response
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
