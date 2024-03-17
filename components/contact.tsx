import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] ">
      <SectionHeading>contact me</SectionHeading>
      <p>
        please contact me directly at{" "}
        <a href="mailto:ruben.arcos06@gmail.com">ruben.arcos06@gmail.com</a> or
        through this form
      </p>

      <form>
        <input type="email" />
        <textarea />
        <button type="submit">
          submit <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}
