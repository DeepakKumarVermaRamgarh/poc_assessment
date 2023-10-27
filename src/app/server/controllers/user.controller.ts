import { NextFunction, Request, Response } from "express";
import { IUser, User } from "../models/user.model";

// function to register new user
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (
      !name ||
      name.trim() === "" ||
      !email ||
      email.trim() === "" ||
      !password ||
      password.trim() === ""
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter all details.",
      });
    }

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    const user: IUser = await User.create({ name, email, password });

    return res.status(201).json({
      success: true,
      message: "Registered successfully.",
    });
  } catch (error) {
    console.log(error);
  }
};

// function to login user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || email.trim() === "" || !password || password.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Please enter all details.",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials.",
      });
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Logged in successfully.",
      user
    });
  } catch (error) {
    console.log(error);
  }
};
