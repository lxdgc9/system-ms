import { check } from "express-validator";

function validateCreateUser() {
  return [
    check("username").notEmpty().withMessage("Yêu cầu tên tài khoản"),
    check("password")
      .notEmpty()
      .withMessage("Yêu cầu mật khẩu")
      .isLength({ min: 6, max: 20 })
      .withMessage(
        "Mật khẩu phải có độ dài ít nhất 6 ký tự và nhiều nhất 20 ký tự"
      ),
  ];
}

export default validateCreateUser;
