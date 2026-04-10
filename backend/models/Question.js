import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    subject: String,
    image: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Question", questionSchema);