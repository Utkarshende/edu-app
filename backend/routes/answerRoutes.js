import express from "express";
import {
  addAnswer,
  getAnswers,
} from "../controllers/answerController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upvoteAnswer } from "../controllers/answerController.js";

const router = express.Router();

// Add Answer (Protected)
router.post("/", protect, addAnswer);
router.put("/upvote/:id", protect, upvoteAnswer);

// Get Answers for a Question
router.get("/:id", getAnswers);

export default router;