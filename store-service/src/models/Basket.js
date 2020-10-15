import { Schema, model, Types } from "mongoose";

const BasketSchema = new Schema({
  seller: {
    type: Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("Basket", BasketSchema);
