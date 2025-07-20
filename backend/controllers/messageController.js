import { Message } from "../models/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const { receiverId, message } = req.body;

    const newMsg = await Message.create({
      sender: req.user._id,
      receiver: receiverId,
      message
    });

    res.status(201).json(newMsg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user._id },
        { receiver: req.user._id }
      ]
    })
      .sort({ createdAt: -1 })
      .populate("sender", "name")
      .populate("receiver", "name");

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
