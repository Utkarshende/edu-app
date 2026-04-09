import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },

    content: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    isAccepted: {
      type: Boolean,
      default: false,
    },

    upvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Answer", answerSchema);