"use client";
import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  Url: string;
}

const projectsData: ProjectsProps[] = [
  {
    id: 1,
    title: "Game Hub",
    description:
      "GameHub is a video game discovery web app that helps you find new and interesting games to play.",
    imageUrl: "/assets/FindGame.png",
    Url: "https://find-game.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "A simple Portfolio website built with Next.js",
    imageUrl: "/assets/Portfolio.png",
    Url: "https://devoluwadamilare.vercel.app/",
  },
  {
    id: 3,
    title: "Vidly",
    description:
      "This project is the back-end of Vidly, an imaginary video rental app.",
    imageUrl: "/assets/vidly.png",
    Url: "https://github.com/Lyttleton21/VIDLY",
  },
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function ProjectsSection() {
  return (
    <section>
      <h2 className="text-center text-4xl font-bol mt-4 mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.imageUrl}
              Url={project.Url}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
