import MongoStore from "connect-mongo"
import session from "express-session"
import mongoose from "mongoose"

export const connectDb = (mongoUrl: string) => {
    mongoose.connect(mongoUrl).then(() => {
        console.log("Connected to MongoDB");
    });
}

export const connectSession = (mongoUrl: string) => {
    return session({
        secret: "my_secrect_key",
        saveUninitialized: true,
        resave: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 24 hours
        },
        store: MongoStore.create({ mongoUrl: mongoUrl })
    })
}