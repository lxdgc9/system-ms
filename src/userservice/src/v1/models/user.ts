import mongoose from "mongoose";
import IUser from "../entities/user";
import userSchema from "../schemas/user";

const UserModel = mongoose.model<IUser>("user", userSchema);

export default UserModel;
