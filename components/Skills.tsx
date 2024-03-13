import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <section>
      <SectionHeading>my skills</SectionHeading>
      <ul>
        {
            skillsData.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))
        }
      </ul>
    </section>
  );
}
