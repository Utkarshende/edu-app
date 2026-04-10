import Answer from "../models/Answer.js";

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
      .lean();

    answers.sort((a, b) => b.upvotes.length - a.upvotes.length);

    res.json(answers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const upvoteAnswer = async (req, res) => {
  try {
    const answer = await Answer.findById(req.params.id);

    if (!answer) {
      return res.status(404).json({ message: "Answer not found" });
    }

    if (answer.upvotes.includes(req.user)) {
      return res.status(400).json({ message: "Already upvoted" });
    }

    answer.upvotes.push(req.user);

    await answer.save();

    res.json({
      message: "Upvoted successfully",
      totalUpvotes: answer.upvotes.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};