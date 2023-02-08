import express, { Application } from "express";
import morgan from "morgan";
import { MONGODB_URI, NODE_ENV } from "./config/vars";
import connectDb from "./drivers/connect-db";
import init from "./drivers/init";
import router from "./v1/api";
import errorHandler from "./v1/middlewares/error-handler";

const app: Application = express();

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

// Khởi động service
app.listen(8000, () => console.log("User service đang hoạt động ..."));
