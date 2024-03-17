
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

      <form className="mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg borderBlack"
          type="email"
        />
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4" />
        <button type="submit" className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all">
          submit <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}
