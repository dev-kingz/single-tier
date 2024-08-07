"use client";

import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {signupSchema} from "@/schemas/dto";
import {Signup} from "@/actions";
import {ToastAction} from "@/components/ui/toast";
import {useToast} from "@/components/ui/use-toast";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {BiError} from "react-icons/bi";
import {FormProps} from "./types";

const SignupForm = ({className, setOpen, setAction}: FormProps) => {
  const {toast} = useToast();
  const [errorText, setErrorText] = useState("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signupSchema>) {
    try {
      const response = await Signup(values);
      if (response) {
        toast({
          title: `Hi ${response.name}!🥳`,
          description: "Welcome to the community!",
          action:
            setOpen && setAction ? (
              <ToastAction
                className="border-none bg-transparent hover:bg-transparent"
                altText="Login"
              >
                <Button
                  variant={"primary"}
                  rounded={"full"}
                  className="h-full"
                  onClick={() => {
                    setAction("login");
                  }}
                >
                  Login
                </Button>
              </ToastAction>
            ) : (
              <></>
            ),
        });
        setErrorText("");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        // replace the message string's comma with line break
        setErrorText(error.message.replace(",", "\n"));
      } else {
        console.error("Failed to signup!");
        setErrorText("Failed to signup!");
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("SignupForm w-full space-y-6", className)}
      >
        <h2>Signup</h2>
        <p>Create an account to get started.</p>
        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({field}) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="john" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
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
        {errorText && (
          <Alert variant="destructive" className="space-x-2">
            <BiError className="h-6 w-6" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>{errorText}</AlertDescription>
          </Alert>
        )}
        <Button variant={"primary"} className="w-full" type="submit">
          Sign up
        </Button>
      </form>
    </Form>
  );
};

export {SignupForm};
