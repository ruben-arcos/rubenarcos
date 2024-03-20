import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import myCertsImg from "@/public/myCerts.png"
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Austin, TX",
    description:
      "I graduated after 5 months of studying. Collaborated with a team of developers to build modern and responsive web applications using best practices",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2023",
  },
  {
    title: "Software Engineer",
    location: "Los Angeles, CA",
    description:
      " Designed and executed full-stack web projects with semantic structure I'm now working as a freelancer. My stack includes React, Next.js, TypeScript, and Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "ER Nurse",
    location: "Lancaster, TX",
    description:
      "Managed a full range of care from traumas and cardiac arrests to the administration of medications for up to 20 patients per shift. Documented data related to patients with 100% accuracy and confidentiality.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "myCerts",
    description:
      "Application to save important documents such as certificates/licenses. This app will keep all your important documents safe and readily available anywhere",
    tags: ["React", "AWS", "MySql Workbench", "Tailwind"],
    imageUrl: myCertsImg,
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  // "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
