"use client";

import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {loginSchema} from "@/schemas/dto";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Input} from "@/components/ui/input";
import {useToast} from "@/components/ui/use-toast";
import {cn} from "@/lib/utils";
import {Login} from "@/actions";
import {Checkbox} from "@/components/ui/checkbox";
import {BiError} from "react-icons/bi";
import {FormProps} from "./types";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {logout, setAccessToken, setSession} from "@/store/slices/user.slice";

const LoginForm = ({className, open, setOpen}: FormProps) => {
  const router = useRouter();
  const {toast} = useToast();
  const [errorText, setErrorText] = useState("");
  const dispatch = useDispatch();

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      stayLoggedIn: true,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      const session = await Login(values);
      if (session) {
        toast({
          title: "Login Successful🥳",
          description: "Welcome Back!",
        });
        if (open && setOpen) setOpen(false);
        setErrorText("");
        localStorage.setItem("accessToken", session.accessToken);
        dispatch(setAccessToken(session.accessToken));
        dispatch(setSession(session.user));
        router.push("/"); // Redirect to the home page
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        // replace the message string's comma with line break
        setErrorText(error.message.replace(",", "\n"));
      } else {
        console.error("Failed to login!");
        setErrorText("Failed to login!");
      }
      dispatch(logout());
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("LoginForm w-full space-y-6", className)}
      >
        <h2>Login</h2>
        <p>Welcome back! Please login to continue.</p>
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({field}) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stayLoggedIn"
          render={({field}) => (
            <FormItem className="flexit gap-x-3">
              <FormControl className="-mb-2">
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>Stay Logged In</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        {errorText && (
          <Alert variant="destructive" className="space-x-2">
            <BiError className="h-6 w-6" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>{errorText}</AlertDescription>
          </Alert>
        )}
        <Button variant={"primary"} className="w-full" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};

export {LoginForm};
