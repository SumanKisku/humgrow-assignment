import { JobSchemaZod } from "@/hooks/job";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "./ui/spinner";

const JobForm = ({ email }: { email: string }) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: ["create-job-post"],
    mutationFn: (values: z.infer<typeof JobSchemaZod>) =>
      fetch("http://localhost:3000/api/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      }),
  });
  const form = useForm<z.infer<typeof JobSchemaZod>>({
    resolver: zodResolver(JobSchemaZod),
    defaultValues: {
      title: "",
      description: "",
      company: "",
      location: "",
      salary: 0,
      createdBy: email,
    },
  });

  const onSubmit = (values: z.infer<typeof JobSchemaZod>) => {
    console.log("V", values);
    mutation.mutate(values);
    navigate(-1);
  };
  
  if (mutation.isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-1/3 mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input required placeholder="Job Title" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input required placeholder="Company" {...field} />
                </FormControl>
                <FormDescription>What is your company name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input required placeholder="Location" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Salary" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <Textarea required placeholder="Job Description" {...field} />
                </FormControl>
                <FormDescription>
                  Write a description of your job
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button>Post</Button>
        </form>
      </Form>
    </div>
  );
};

export default JobForm;
