import mongoose from "mongoose";

function connectDb(connStr: string): void {
  mongoose
    .connect(connStr)
    .then(() => console.log("Kết nối thành công với user database"))
    .catch((err) => {
      console.log("Kết nối thất bại với user database");
      console.log(err);
    });
}

export default connectDb;
