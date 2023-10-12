import bcrypt from "bcrypt";
import { Request, Response } from "express";

const generateSecret = async (req: Request, res: Response) => {
  try {
    const secret = bcrypt.genSaltSync(10);
    return res.status(200).json(secret);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
};

export default generateSecret;
