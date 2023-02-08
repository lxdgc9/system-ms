const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const AccountModel = require("../models/account");
const { SECRET_KEY } = require("../../config/vars");

async function login(req, res, next) {
  const { username, password } = req.body;

  try {
    // Ràng buộc đầu vào
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      const err = {
        name: "Lỗi ràng buộc đầu vào",
        statusCode: 400,
        message: errs.array()[0].msg,
      };
      throw err;
    }

    // Kiểm tra tên tài khoản
    const account = await AccountModel.findOne({ username });
    if (!account) {
      const err = {
        name: "Tài khoản không tồn tại",
        statusCode: 403,
        message: "Đăng nhập thất bại. Tên tài khoản hoặc mật khẩu không đúng",
      };
      throw err;
    }

    // So sánh mật khẩu
    const isMatch = await account.comparePassword(password);
    if (!isMatch) {
      const err = {
        name: "Sai mật khẩu",
        statusCode: 403,
        message: "Đăng nhập thất bại. Tên tài khoản hoặc mật khẩu không đúng",
      };
      throw err;
    }

    // Tạo access token
    const token = jwt.sign(
      {
        id: account.id,
      },
      SECRET_KEY,
      {
        expiresIn: "7d", // Thời gian sống của token là 7 ngày
      }
    );
    // Ok, gửi response
    res.json({
      status: true,
      message: "Đăng nhập thành công",
      accessToken: token,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = login;
