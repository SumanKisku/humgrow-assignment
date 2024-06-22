import express, { Request, Response } from "express";
import { loginUserAsync, logoutUserAsync, signupUserAsync } from "../controllers/user";
const router = express.Router();

router.post("/signup", signupUserAsync);
router.post("/login", loginUserAsync);
router.post("/logout", logoutUserAsync);

export default router;