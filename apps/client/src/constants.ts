import { z } from "zod";

export const UserRoleEnum = z.enum(["Candidate", "Admin", "Recruiter", "Coordinator", "Employer"]);
