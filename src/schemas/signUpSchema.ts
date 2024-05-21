import { z } from 'zod';


export const userNameValidation = z
    .string()
    .min(3, "username must be atleast 3")
    .max(20, "username must be atmost 20")
    .regex(/^[a-zA-Z0-9_]*$/, "username must contain only alphabets, numbers and underscore");

export const signupSchema = z.object({
    username: userNameValidation,
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, "password must be atleast 6"),
})