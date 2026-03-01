"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [role, setRole] = useState<string>("");

  return (
    <form
      className={cn("flex flex-col gap-5 font-display", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-start gap-1 text-center">
          <h1 className="text-3xl font-bold">Create your secure account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Join the leading voice AI platform for healthcare automation.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Field>
            <FieldLabel htmlFor="email">First Name</FieldLabel>
            <Input id="text" type="text" placeholder="Kanishk" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Last Name</FieldLabel>
            <Input id="text" type="text" placeholder="Kumar" required />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Organization Name</FieldLabel>
          <Input
            id="text"
            type="text"
            placeholder="eg. City Hospital"
            required
          />
        </Field>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Building className="h-5 w-5 text-slate-400" />
          </div>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="block w-full rounded-lg border border-border-light dark:border-border-dark 
                   bg-white text-slate-900 focus:border-primary focus:ring-primary 
                   pl-10 pr-8 py-2.5 sm:text-sm shadow-sm appearance-none"
          >
            <option disabled value="">
              Select your role
            </option>
            <option value="administrator">Administrator</option>
            <option value="clinician">Clinician (MD, DO, NP, PA)</option>
            <option value="nurse">Nurse</option>
            <option value="it_support">IT Support</option>
            <option value="other">Other</option>
          </select>

          {/* Right arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="h-5 w-5 text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit" className="bg-green-500 text-black font-black">
            Sign Up
          </Button>
        </Field>
        <FieldDescription className="text-center">
          Already have an account?{" "}
          <a href="/sign-in" className="underline underline-offset-4">
            Sign In
          </a>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
