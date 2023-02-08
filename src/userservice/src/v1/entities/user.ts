import mongoose from "mongoose";

interface IUser {
  account: mongoose.Types.ObjectId;
}

export default IUser;
