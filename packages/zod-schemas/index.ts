import { z } from "zod";

export const formSchema = z
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