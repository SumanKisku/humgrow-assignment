import { ZodError, z } from "zod";
import bcrypt from "bcrypt";

import User from "../models/user";
import { Request, Response } from "express";

const saltRounds = 10;
const signupForm = z.object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(8, {
        message: "The password must be 8 characters"
    }),
    role: z.string().optional(),
});

export const signupUserAsync = async (req: Request, res: Response) => {
    try {
        // Validating user data and destructuring
        const { name, email, password } = signupForm.parse(req.body);
        // Check no user using this email already
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
                    email, name, password: hash, role: "candidate"
                });
                newUser.save();
            });
        });

        res.json({
            status: "ok",
            message: "signed up",
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
            if (result) {
                // user login successful
                req.session.user = { email: user.email };
                return res.status(200).json({
                    status: "ok",
                    message: "logged in successful",
                })
            } else {
                return res.status(200).json({
                    status: "not ok",
                    message: "password doesn't match",
                })
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