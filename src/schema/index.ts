import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({ message: "please enter a valid email address" }),
  name: z
    .string()
    .min(2, { message: "please enter a name" })
    .max(25, { message: "name can't exceed more than 25 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 charactors long" })
    .max(20, { message: "Password can't exceed more than 20 characters" }),
  confirmPassword: z
    .string()
    .min(6, { message: "Password must be atleast 6 charactors long" }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});
