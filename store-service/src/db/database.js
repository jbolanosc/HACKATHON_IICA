import mongoose from "mongoose";

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose
  .connect(`mongodb://${user}:${password}@store-service-db/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("db connected to", db.connection.host))
  .catch((err) => console.log(err));
