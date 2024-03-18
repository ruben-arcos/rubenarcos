"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData: FormData) => {
  console.log("running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ruben.arcos06@gmail.com",
    subject: "Message from contact form",
    text: "Hello world!",
  });
};
