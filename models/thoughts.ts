import mongoose, { Schema } from "mongoose";

const thoughtSchema = new Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);

const Thought =
  mongoose.models.Thought || mongoose.model("Thought", thoughtSchema);

export default Thought;
