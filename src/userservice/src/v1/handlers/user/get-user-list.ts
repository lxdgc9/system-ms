import express from "express";
import HttpException from "../../../type/http-exception";
import UserModel from "../../models/user";

async function getUserList(
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  try {
    const userList = await UserModel.find({});
    if (!userList.length) {
      const err: HttpException = {
        name: "Danh sách rỗng",
        statusCode: 404,
        message: "Không tìm thấy người dùng",
      };
      throw err;
    }

    res.json({
      status: true,
      message: "Lấy danh sách người dùng thành công",
      userList,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export default getUserList;
