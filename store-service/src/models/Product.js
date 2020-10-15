import { Schema, model, Types } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  seller: {
    type: Types.ObjectId,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  available: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  imagePath: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("Product", ProductSchema);
