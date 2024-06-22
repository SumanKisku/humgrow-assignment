import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(8),
});

const LoginPage = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "sumankisku1@gmail.com",
      password: "sumankisku",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    // Send to the backend
    await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(async (data) => {
      const result = await data.json();
      if (result.status === "not ok") {
        toast({
          variant: "destructive",
          title: "Wrong email/password",
          description: "Invalid credentials, try again or signup",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    });
  };

  return (
    <div className="mx-4 mt-4 flex justify-center">
      <div className="border border-gray-200 p-4 w-full md:w-2/3 lg:w-1/3">
        <h1 className="font-bold text-gray-900 text-4xl text-center">Log In</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe123@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-6">
              Log in
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
