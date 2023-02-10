import mongoose from "mongoose";
import IProfile from "../entities/profile";
import profileSchema from "../schemas/profile";

const ProfileModel = mongoose.model<IProfile>("profile", profileSchema);

export default ProfileModel;
