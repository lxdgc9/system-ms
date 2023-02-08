import mongoose from "mongoose";
import accountSchema from "../schemas/account";

const AccountModel = mongoose.model("account", accountSchema);

export default AccountModel;
