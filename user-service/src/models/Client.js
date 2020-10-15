import { Schema, model } from "mongoose";

const ClientSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("Client", ClientSchema);
