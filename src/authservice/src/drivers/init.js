const mongoose = require("mongoose");

function init() {
  // Bật strict query
  mongoose.set("strictQuery", true);

  // Khi trả về json, object sẽ là id thay vì _id
  mongoose.set("toJSON", {
    virtuals: true,
    transform: (_doc, converted) => {
      delete converted._id;
    },
  });
}

module.exports = init;
