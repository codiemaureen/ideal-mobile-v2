'use server';

import { hashSync } from "bcryptjs";
import { prisma } from "@/db/prisma";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { formatError } from "../utils";
import { signInFormSchema, signUpFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";


// Sign user in with credentials
export async function signInWithCredentials(prevState, formData) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    const callbackUrl = formData.get("callbackUrl") || "/";

    await signIn("credentials", {
      ...user,
      redirectTo: callbackUrl,   
    });

    return { success: true, message: "Signed in Successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "Invalid email or password" };
  }
}

// Sign user out
export async function signOutUser() {
  return await signOut({ redirectTo: '/sign-in' })
}

// Sign user up
export async function signUpUser(prevState, formData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const unalteredPassword = user.password;
    user.password = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        role: "user",
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: unalteredPassword,
    });

    return {
      success: true,
      message: "User registered successfully",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: formatError(error) };
  }
}