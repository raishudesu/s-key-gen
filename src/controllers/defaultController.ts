import { Request, Response } from "express";

const defaultContoller = async (req: Request, res: Response) => {
  try {
    return res
      .status(200)
      .json("Use the route /generate-key to generate your secret key.");
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
};

export default defaultContoller;
