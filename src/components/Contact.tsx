"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { TextInput } from "@mantine/core";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextInput
          label="Name"
          placeholder="Your name or business"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <TextInput
          label="Email"
          error="Invalid email"
          defaultValue="hello!gmail.com"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <TextInput
          label="Message"
          placeholder="what would you like to chat about?"
          {...register("message", { required: true })}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Contact;
