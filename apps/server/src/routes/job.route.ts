import express from "express";
import { createJobAsync, deleteJobAsync, readJobAsync, updateJobAsync } from "../controllers/job.controller";
import { isAuthenticated } from "../middlewares/authentication.middle";
import { isRoleEmployer } from "../middlewares/authrization.middle";
const router = express.Router();

router.get("/", isAuthenticated, readJobAsync)
    .post("/", isAuthenticated, isRoleEmployer, createJobAsync)
    .delete("/", isAuthenticated, isRoleEmployer, deleteJobAsync)
    .put("/:id", isAuthenticated, isRoleEmployer, updateJobAsync);

export default router;