"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import {Button, TextInput} from "@mantine/core";

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
          placeholder="your name or business"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <TextInput
          label="Email"
          placeholder="hello@gmail.com"
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
      <div style={{ marginTop: '1rem' }}>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default Contact;
