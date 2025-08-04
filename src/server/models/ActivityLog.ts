import { Schema, model } from "mongoose";

const ActivityLogSchema = new Schema({
  groupId: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  action: {
    type: String,
    enum: [
      "expense_added",
      "expense_updated",
      "expense_deleted",
      "member_added",
      "member_removed",
      "settlement_completed",
    ],
    required: true,
  },
  details: {
    expenseId: { type: Schema.Types.ObjectId, ref: "Expense" },
    settlementId: { type: Schema.Types.ObjectId, ref: "Settlement" },
    targetUserId: { type: Schema.Types.ObjectId, ref: "User" },
    metadata: { type: Schema.Types.Mixed },
  },
  createdAt: { type: Date, default: Date.now },
});

const ActivityLog = model("ActivityLog", ActivityLogSchema);

export default ActivityLog;
