import express from "express";
import createUser from "../handlers/user/create-user";
import getUserList from "../handlers/user/get-user-list";
import validateCreateUser from "../validations/user/create-user";

const router = express.Router();

router.get("/", getUserList);
router.post("/", validateCreateUser(), createUser);

export default router;
