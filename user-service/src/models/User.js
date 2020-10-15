import { Schema, model, Types } from "mongoose";

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  carrier: {
    type: Types.ObjectId,
  },
  products: [String],
  baskets: [String],
});

export default model("User", UserSchema);
