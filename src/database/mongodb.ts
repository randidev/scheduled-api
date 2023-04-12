import mongoose, { ConnectOptions } from "mongoose";

export const mongoConnect = () => {
  if (mongoose.connections[0].readyState) {
    // if connection is open return the instance of the database for cleaner queries
    return mongoose.connection.db;
  }

  return mongoose
    .connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/scheduled-api-test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    )
    .then(() => {
      // console.log("Database Connected");
    });
};
