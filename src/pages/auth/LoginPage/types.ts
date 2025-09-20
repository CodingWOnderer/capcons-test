import * as z from "zod";
import { phone } from "phone";

export const passwordSchema = z
  .string()
  .min(8, { message: "must contain 8 character" })
  .max(20, { message: "max 32 characters" })
  .refine((password: string) => /[A-Z]/.test(password), {
    message: "atleast one Uppercase",
  })
  .refine((password: string) => /[a-z]/.test(password), {
    message: "atleast one LowerCase",
  })
  .refine((password: string) => /[0-9]/.test(password), {
    message: "atleast one numeral",
  })
  .refine((password: string) => /[!@#$%^&*]/.test(password), {
    message: "atleast one Special Character",
  });


const phoneSchema = z
  .string()
  .refine((val) => {
    if (!val.startsWith("+")) return false;
    const result = phone(val, { validateMobilePrefix: true });
    return result.isValid;
  }, { message: "Invalid phone number" });

const emailSchema = z.string().email({ message: "Invalid email address" });

export const signupformSchema = z.object({
credential: z.union([phoneSchema, emailSchema]),
  password: passwordSchema,
  rememberMe: z
    .boolean()
    .refine((value: boolean) => value === true, {
      message: "You must accept the proposal.",
    }),
});

export type SignupFormSchema = z.infer<typeof signupformSchema>;
