import express, { Request, Response } from "express";
import { isUserAuthorizedAsync, loginUserAsync, logoutUserAsync, signupUserAsync } from "../controllers/user.controller";
import { isAuthenticated } from "../middlewares/authentication.middle";
const router = express.Router();

router.post("/signup", signupUserAsync);
router.post("/login", loginUserAsync);
router.post("/logout", isAuthenticated, logoutUserAsync);
router.get("/isauthorized", isAuthenticated, isUserAuthorizedAsync);

export default router;