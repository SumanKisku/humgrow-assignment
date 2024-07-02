import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.session?.user == undefined) {
        return res.status(401).json({
            status: "not ok",
            message: "you're unauthenticated to perform this action"
        })
    } else {
        next();
    }
}