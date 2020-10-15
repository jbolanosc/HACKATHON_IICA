import { Schema, model, Types } from "mongoose";

const OrderSchema = new Schema({
  seller: {
    type: Types.ObjectId,
    required: true,
  },
  client: {
    type: Types.ObjectId,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  actualLocation: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  destiny: {
    type: String,
    required: true,
  },
  items: [String],
  total: {
    type: Number,
    required: true,
  },
  carrier: {
    type: Types.ObjectId,
    required: true,
  },
});

export default model("Order", OrderSchema);
