import { Request, Response } from "express";
import { Job, JobSchemaZod } from "../models/job.model";
import { date, z } from "zod";

export const createJobAsync = async (req: Request, res: Response) => {
    const { title, description, company, location, salary, createdBy }: z.infer<typeof JobSchemaZod> = req.body;
    try {
        const newJob = new Job({
            title,
            description,
            company,
            location,
            salary,
            createdBy
        });
        newJob.save();
        res.status(200).json({
            status: "ok",
            message: "Job created successfully",
            data: newJob,
        })
    } catch (error) {
        console.log(error);
    }
}

export const readJobAsync = async (req: Request, res: Response) => {
    try {
        const jobs = await Job.find({});
        return res.status(200).json({
            status: "ok",
            message: "Jobs fetched successfully",
            data: jobs,
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateJobAsync = async (req: Request, res: Response) => {
    const id = req.query?.id;
    console.log("🚀 ~ updateJobAsync ~ id:", id)
    const { title, description, company, location, salary } = req.body;
    try {
        const updatedJob = await Job.findByIdAndUpdate(id, { title, description, company, location, salary }
        );
        res.status(200).json({
            status: "ok",
            message: "Job updated successfully",
            data: updatedJob,
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteJobAsync = async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
        const deletedJob = await Job.findByIdAndDelete(id);
        if (deletedJob == null) {
            return res.status(201).json({
                status: "not ok",
                message: "Enter a valid id",
            })
        }
        res.status(200).json({
            status: "ok",
            message: "Job deleted successfully",
            data: deletedJob,
        })
    } catch (error) {
        console.log(error);
    }
}