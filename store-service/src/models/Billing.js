import { Schema, model, Types } from "mongoose";

const BillingSchema = new Schema({
  seller: {
    type: Types.ObjectId,
    required: true,
  },
  client: {
    type: Types.ObjectId,
    required: true,
  },
  order: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("Billing", BillingSchema);
