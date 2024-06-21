import { Application, Request, Response } from "express"

import express from "express";
import cors from "cors";
import { z, ZodError } from "zod";
import mongoose from "mongoose";
import User from "./models/user";
import bcrypt from "bcrypt";
import session from "express-session"
import MongoStore from "connect-mongo";

require("dotenv").config();

const app: Application = express();
const port = 3000;
const saltRounds = 10;
const mongo_uri = process.env.MONGO_URL as string;

app.use(cors());
app.use(express.json());
app.use(session({
    secret: "my_secrect_key",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
    store: MongoStore.create({ mongoUrl: mongo_uri })
}));


mongoose.connect(mongo_uri).then(() => {
    console.log("Connected to MongoDB");
});

const signupForm = z.object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(8, {
        message: "The password must be 8 characters"
    }),
    confirm: z.string().min(8),
    role: z.string().optional(),

}).refine((data) => data.password === data.confirm, {
    message: "Password doesn't match",
    path: ["confirm"],
})

app.get("/", (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        message: "Hello world",
    })
})

app.post("/api/signup", async (req: Request, res: Response) => {
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
})

app.post("/api/login", async (req: Request, res: Response) => {
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
})

app.post("/api/logout", (req: Request, res: Response) => {
    const sessionId = req.session.destroy(() => {
        console.log("Logout");
    });
    console.log(sessionId);
    res.status(200).json({
        status: "ok",
        message: "Logout successful"
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})