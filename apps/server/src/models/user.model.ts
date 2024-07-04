import mongoose from "mongoose";
import { z } from "zod";

export const UserRoleEnum = z.enum(["candidate", "admin", "recruiter", "coordinator", "employer"]);

export const userSchemaZod = z.object({
    name: z.string().min(4, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    role: UserRoleEnum
});

type UserType = z.infer<typeof userSchemaZod>;

const userSchema = new mongoose.Schema<UserType>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
})

const User = mongoose.model("User", userSchema);

export default User;