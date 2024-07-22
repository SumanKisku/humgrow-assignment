// import { useQuery } from "@tanstack/react-query"
import { z } from "zod"

export const JobSchemaZod = z.object({
    title: z.string().min(8),
    description: z.string().min(20),
    company: z.string(),
    location: z.string(),
    salary: z.union([z.string(), z.number()]),
    createdBy: z.string().email(),
})

// const useJobs = () => {
//     const { data } = useQuery({
//         queryKey: ['jobs'],
//         queryFn: () => fetch()
//     })
// }