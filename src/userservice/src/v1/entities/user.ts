import mongoose from "mongoose";

interface IUser {
  username: string;
  password: string;
  profile: mongoose.Types.ObjectId;
  isActive: boolean;
}

export default IUser;
