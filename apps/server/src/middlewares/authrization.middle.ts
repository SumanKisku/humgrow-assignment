import { NextFunction, Request, Response } from "express";
import { UserRoleEnum } from "../models/user.model";

export const isRoleAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.session?.user?.role !== UserRoleEnum.Values.admin) {
        return res.status(403).json({
            status: "not ok",
            message: "you're not authrized to perform this action. You're not Admin."
        })
    } else {
        next();
    }
}

export const isRoleCoordinator = (req: Request, res: Response, next: NextFunction) => {
    if (req.session?.user?.role !== UserRoleEnum.Values.coordinator) {
        return res.status(403).json({
            status: "not ok",
            message: "you're not authrized to perform this action. You're not employer."
        })
    } else {
        next();
    }
}

export const isRoleEmployer = (req: Request, res: Response, next: NextFunction) => {
    if (req.session?.user?.role !== UserRoleEnum.Values.employer) {
        return res.status(403).json({
            status: "not ok",
            message: "you're not authrized to perform this action. You're not employer."
        })
    } else {
        next();
    }
}


export const isRoleRecruiter = (req: Request, res: Response, next: NextFunction) => {
    if (req.session?.user?.role !== UserRoleEnum.Values.recruiter) {
        return res.status(403).json({
            status: "not ok",
            message: "you're not authrized to perform this action. You're not employer."
        })
    } else {
        next();
    }
}

export const isRoleCanditate = (req: Request, res: Response, next: NextFunction) => {
    if (req.session?.user?.role !== UserRoleEnum.Values.candidate) {
        return res.status(403).json({
            status: "not ok",
            message: "you're not authrized to perform this action. You're not candidate."
        })
    } else {
        next();
    }
}