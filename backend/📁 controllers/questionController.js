import Question  from "../models/Question.js";

export const createQuestion =  async (req, res)=>{
    const {title, option , answer} = req.body;

    const question = await Question.create({
title,
description,
subject,
user:req.user,
    });
    res.json(question);
};

export const getQestion = async(req, res)=>{
    const questions = await Question.find().populate("user","name");
    res.json(questions);
}