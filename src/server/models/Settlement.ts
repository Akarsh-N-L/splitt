import { Schema, model } from "mongoose";

const SettlementSchema = new Schema({
  groupId: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  from: { type: Schema.Types.ObjectId, ref: "User", required: true },
  to: { type: Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true, min: 0.01 },
  currency: { type: String, default: "USD" },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
  method: {
    type: String,
    enum: ["cash", "bank_transfer", "paypal", "venmo", "other"],
  },
  note: { type: String, maxlength: 500 },
  settledAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Settlement = model("Settlement", SettlementSchema);

export default Settlement;
