import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
  console.log("File .env trong thư mục được tìm thấy");
  dotenv.config();
}

export const {
  NODE_ENV = "development",
  SECRET_KEY = "user-service-secret-key",
  MONGODB_URI = "mongodb+srv://kimochi:mlemmlem@caro.8sbir.mongodb.net/system-user",
} = process.env;
