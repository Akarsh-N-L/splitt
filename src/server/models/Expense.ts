import { Schema, model } from "mongoose";

const ExpenseSchema = new Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 200 },
  description: { type: String, maxlength: 1000 },
  amount: { type: Number, required: true, min: 0.01 },
  currency: { type: String, default: "USD" },
  category: {
    type: String,
    enum: [
      "food",
      "transport",
      "accommodation",
      "entertainment",
      "utilities",
      "shopping",
      "other",
    ],
    default: "other",
  },
  groupId: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  paidBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  splitType: {
    type: String,
    enum: ["equal", "exact", "percentage"],
    default: "equal",
  },
  participants: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      amountOwed: { type: Number, required: true, min: 0 },
      percentage: { type: Number, min: 0, max: 100 }, // optional, for percentage splits
      isPaid: { type: Boolean, default: false },
    },
  ],
  receipt: {
    url: { type: String },
    fileName: { type: String },
    uploadedAt: { type: Date },
  },
  date: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Expense = model("Expense", ExpenseSchema);

export default Expense;
