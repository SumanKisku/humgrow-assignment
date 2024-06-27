import { z } from "zod";

export const UserRoleEnum = z.enum(["candidate", "admin", "recruiter", "coordinator", "employer"]);
