import { Schema, model } from "mongoose";

const CarrierSchema = new Schema({
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
  vehicle: {
    type: String,
    required: true,
  },
  vehicleCapacity: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: false,
  },
  imagePath: {
    type: String,
  },
  orders: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("Carrier", CarrierSchema);
