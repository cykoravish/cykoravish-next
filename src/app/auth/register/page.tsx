"use client";

import CardWrapper from "@/components/auth/card-wrapper";
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
