"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] ">
      <SectionHeading>contact me</SectionHeading>
      <p className="text-gray-700">
        please contact me directly at{" "}
        <a className="underline" href="mailto:ruben.arcos06@gmail.com">
          ruben.arcos06@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form className="mt-10">
        <input
          className="h-14 rounded-lg border border-black/10"
          type="email"
        />
        <textarea className="h-52 my-3 rounded-lg border border-black/10" />
        <button type="submit">
          submit <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}
