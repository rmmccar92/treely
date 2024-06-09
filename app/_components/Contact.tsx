"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";
import { cn } from "@/utils/cn";
import emailjs from "@emailjs/browser";

// cbord@treely-xmas.com

export function Contact() {
  const [error, setError] = React.useState(false);

  const [formState, setFormState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    company: "",
    address: "",
    message: "",
  });

  const [show, setShow] = React.useState(false);
  const [errorText, setErrorText] = React.useState(
    "There was an error. Please try again."
  );

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("FS", formState);
    const { firstName, lastName, budget, company, email, address, message } =
      formState;
    if (firstName !== "" && lastName !== "" && email !== "" && message !== "") {
      const serviceId = "service_7jo1m4o";
      const templateId = "template_r384knp";
      const userId = "liy6UAnCmSNKdNAV1";
      const templateParams = {
        firstName,
        lastName,
        email,
        budget,
        address,
        company,
        message,
      };

      try {
        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          userId
        );
        console.log("Success", response);
      } catch (err: unknown) {
        console.log("Error", err);
        if (err) {
          setErrorText(err.toString());
        }
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      }
    } else {
      console.log("Error: Please fill out all fields");
      setErrorText("Please fill out all fields.");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };
  return (
    <div className="max-w-5xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mb-4">
      <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
        Contact Us!
      </h2>
      <p className="text-neutral-600 text-base max-w-lg mt-2 dark:text-neutral-300 mx-auto">
        Questions about services or booking? Reach out to us!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="First Name"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="budget">Budget</Label>
            <Input
              id="budget"
              placeholder="Your budget for this project"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              placeholder="Company Name"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Please provide the address of your company"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            placeholder=""
            type="text"
            className="h-20"
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-emerald-700 text-3xl dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-1/3 mx-auto text-white rounded-md h-10 rounded-xl font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[2px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
