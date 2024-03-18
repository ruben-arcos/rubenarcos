"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { SendEmail } from "@/actions/SendEmail";
import SubmitBtn from "./SubmitBtn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>contact me</SectionHeading>

      <p className="text-gray-700 -mt-6">
        please contact me directly at{" "}
        <a className="underline" href="mailto:ruben.arcos06@gmail.com">
          ruben.arcos06@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await SendEmail(formData);

          if (error) {
            alert(error);
            return;
          }
          alert("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
