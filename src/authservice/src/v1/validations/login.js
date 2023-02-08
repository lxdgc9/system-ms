const { check } = require("express-validator");

function validateLogin() {
  return [
    check("username").notEmpty().withMessage("Yêu cầu tên tài khoản"),
    check("password").notEmpty().withMessage("Yêu cầu mật khẩu"),
  ];
}

module.exports = validateLogin;
