"use client";

import React, { FC } from "react";
import { Form, useForm } from "react-hook-form";
import { sendEmail } from "@/utils/nodemailer/send-email";
import { Textarea, TextInput } from "react-hook-form-mantine";
import { Button } from "@mantine/core";
import { DevTool } from "@hookform/devtools";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

interface ContactProps {
  onSent: () => void;
}

const Contact: FC<ContactProps> = ({ onSent }) => {
  const { register } = useForm<FormData>();
  const { control } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormData) {
    sendEmail(data);
    onSent();
  }

  return (
    <>
      <Form onSubmit={(e) => onSubmit(e.data)} control={control}>
        <div className="label" style={{ padding: ".5rem 0" }}>
          <TextInput
            label="Name"
            placeholder="your name or business"
            control={control}
            {...register("name", { required: true })}
          />
        </div>
        <div className="label" style={{ padding: ".5rem 0" }}>
          <TextInput
            label="Email"
            placeholder="hello@gmail.com"
            control={control}
            {...register("email", { required: true })}
          />
        </div>
        <div className="label" style={{ padding: ".5rem 0" }}>
          <Textarea
            label="Message"
            placeholder="what would you like to chat about?"
            control={control}
            {...register("message", { required: true })}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Button
            fullWidth
            style={{
              border: `.5px solid #000`,
              color: `#000`,
              fontWeight: "300",
              backgroundColor: `#fff`,
            }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
      <DevTool control={control} />
    </>
  );
};

export default Contact;
