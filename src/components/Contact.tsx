"use client";

import React, { FC, FormEventHandler } from "react";
import { Form, useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { TextInput } from "react-hook-form-mantine";
import { Button } from "@mantine/core";
import { DevTool } from "@hookform/devtools";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { control } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <>
      <Form onSubmit={(e) => onSubmit(e.data)} control={control}>
        <div style={{ padding: ".5rem 0" }}>
          <TextInput
            label="Name"
            placeholder="your name or business"
            control={control}
            {...register("name", { required: true })}
          />
        </div>
        <div style={{ padding: ".5rem 0" }}>
          <TextInput
            label="Email"
            placeholder="hello@gmail.com"
            control={control}
            {...register("email", { required: true })}
          />
        </div>
        <div style={{ padding: ".5rem 0" }}>
          <TextInput
            label="Message"
            placeholder="what would you like to chat about?"
            control={control}
            {...register("message", { required: true })}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Button fullWidth variant="light" color="grape" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <DevTool control={control} />
    </>
  );
};

export default Contact;
