import Answer from "../models/Answer.js";

// Add Answer
export const addAnswer = async (req, res) => {
  try {
    const { questionId, content } = req.body;

    const answer = await Answer.create({
      question: questionId,
      content: content,
      user: req.user,
    });

    res.status(201).json(answer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAnswers = async (req, res) => {
  try {
    const answers = await Answer.find({
      question: req.params.id,
    })
      .populate("user", "name")
      .sort({ upvotes: -1 }); // 🔥 important line

    res.json(answers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};