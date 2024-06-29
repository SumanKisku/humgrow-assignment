import mongoose, { Mongoose } from "mongoose";
import { z } from "zod";

export const JobSchemaZod = z.object({
    title: z.string().min(8),
    description: z.string().min(20),
    company: z.string(),
    location: z.string(),
    salary: z.union([z.string(), z.number()]),
    createdBy: z.string().email(),
})

type JobType = z.infer<typeof JobSchemaZod>;

const JobSchema = new mongoose.Schema<JobType>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: mongoose.Schema.Types.Mixed },
    createdBy: { type: String, required: true }
}, {
    timestamps: true,

})

export const Job = mongoose.model<JobType>("Job", JobSchema);