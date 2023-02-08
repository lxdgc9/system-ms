const mongoose = require("mongoose");
const accountSchema = require("../schemas/account");

const AccountModel = mongoose.model("account", accountSchema);

module.exports = AccountModel;
