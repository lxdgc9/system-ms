const express = require("express");
const morgan = require("morgan");
const init = require("./drivers/init");
const connectDb = require("./drivers/connect-db");
const errorHandler = require("./v1/middlewares/error-handler");
const router = require("./v1/api/index");
const { MONGODB_URI, NODE_ENV } = require("./config/vars");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Thực hiện kết nối với MongoDb
init();
connectDb(MONGODB_URI);

// Debug ở chế độ development mode
if (NODE_ENV === "development") {
  console.log("Debug đang bật ở chế độ development");
  app.use(morgan("dev"));
}

// Định tuyến API
app.use("/v1", router);

// Bắt lỗi
app.use(errorHandler);

app.listen(8001, () => console.log("Auth service đang hoạt động ..."));
