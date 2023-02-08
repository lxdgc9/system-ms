import mongoose from "mongoose";
import userSchema from "../schemas/user";

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
