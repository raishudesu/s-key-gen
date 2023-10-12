import { Router } from "express";
import generateSecret from "../controllers/generateController";

const router = Router();

router.get("/", generateSecret);

export { router as generate };
