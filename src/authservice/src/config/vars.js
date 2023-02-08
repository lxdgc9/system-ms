const fs = require('fs')
const dotenv = require('dotenv')

if (fs.existsSync('.env')) {
  console.log("File .env trong thư mục được tìm thấy");
  dotenv.config();
}

module.exports = {
  NODE_ENV: "development",
  SECRET_KEY: "auth-service-secret-key",
  MONGODB_URI: "mongodb+srv://kimochi:mlemmlem@caro.8sbir.mongodb.net/system-user",
}