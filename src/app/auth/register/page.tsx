"use client";

import CardWrapper from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
export default function RegisterPage() {
  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an Account? Login here."
    >
      <form></form>
    </CardWrapper>
  );
}
