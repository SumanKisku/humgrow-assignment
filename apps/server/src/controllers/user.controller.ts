import { z, ZodError } from "zod";
import bcrypt from "bcrypt";

import User from "../models/user.model";
import { Request, Response } from "express";

const saltRounds = 10;
const formSchema = z
    .object({
        name: z
            .string()
            .min(4, {
                message: "Name must be at least 4 characters",
            })
            .max(50),
        email: z.string().email().min(5),
        password: z.string().min(8),
        confirm: z.string().min(8),
        role: z.string({
            required_error: "Please select a role.",
        }),
    })
    .refine((data) => data.password === data.confirm, {
        message: "Passwords doesn't match",
        path: ["confirm"],
    });

export const signupUserAsync = async (req: Request, res: Response) => {
    try {
        // Validating user data and destructuring
        const { name, email, password, role } = formSchema.parse(req.body);
        const user = await User.findOne({
            email
        })
        if (user) {
            return res.status(200).json({
                status: "not ok",
                message: "user already exists"
            })
        }

        // No user exists so we can add a new user
        // Hash the password
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                const newUser = new User({
                    email, name, password: hash, role: role
                });
                newUser.save();
            });
        });

        res.json({
            status: "ok",
            message: "signed up",
            data: { email: email, role: role }
        });
    } catch (err) {
        if (err instanceof ZodError) {
            res.json({
                status: 'not ok',
                message: err.errors,
            });
        }
        else {
            console.log(err);
        }
    }
}

export const loginUserAsync = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // check if user exists
        const user = await User.findOne({
            email
        })
        // User doesn't exists
        if (user == null) {
            return res.status(200).json({
                status: "not ok",
                message: "User doesn't exists",
            })
        }
        // User exists
        // check password match or not
        bcrypt.compare(password, user.password, function (err, result) {
            if (!result) {
                return res.status(200).json({
                    status: "not ok",
                    message: "password doesn't match",
                })
            } else {
                // user login successful
                req.session.user = { email: user.email, role: user.role };
                return res.status(200).json({
                    status: "ok",
                    message: "logged in successful",
                    data: req.session.user,
                });
            }
        });
    } catch (err) {
        console.log(err);
    }
};

export const logoutUserAsync = (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }

    });
    res.status(200).json({
        status: "ok",
        message: "Logout successful"
    })
}

export const isUserAuthorizedAsync = (req: Request, res: Response) => {
    const role = req.session.user?.role;
    if (!role) {
        return res.status(403).json({
            status: "not ok",
            message: "User is not authorized",
        })
    }
    return res.status(200).json({
        status: "ok",
        message: "User is Authorized",
        data: {
            email: req.session.user?.email,
            role: req.session.user?.role,
        }
    })
}