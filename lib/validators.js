import { z } from 'zod';


// schema for signing users in
export const signInFormSchema = z.object({
  email: z.email('Invalid Email Address'),
  password: z.string().min(6, 'Password must be atleast 6 characters')
})
// schema for signing users up
export const signUpFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.email('Invalid Email Address'),
  password: z.string().min(6, 'Password must be atleast 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters')
}).refine((data) => 
  data.password === data.confirmPassword, {
    message: "Password must match",
    path: ['confirmPassword']
})