import { Student } from "../models/Student.js";
import { HostelOwner } from "../models/HostelOwner.js";
import { User } from "../models/User.js";

export const onboardStudent = async (req, res) => {
  try {
    const { city, institute, gender, budget, preferences } = req.body;

    const student = await Student.create({
      userId: req.user._id,
      city, institute, gender, budget, preferences
    });

    await User.findByIdAndUpdate(req.user._id, { onboarded: true });

    res.status(201).json({ message: "Student onboarded", student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const onboardHostelOwner = async (req, res) => {
  try {
    const { hostelName, address, contactNumber, description } = req.body;

    const owner = await HostelOwner.create({
      userId: req.user._id,
      hostelName, address, contactNumber, description
    });

    await User.findByIdAndUpdate(req.user._id, { onboarded: true });

    res.status(201).json({ message: "Owner onboarded", owner });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
