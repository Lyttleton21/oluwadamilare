import React from "react";
import Image from "next/image";
import MySkills from "./MySkills";

export default function AboutSection() {
  return (
    <div className=" bg-white ">
      <section className="text-white px-0 mx-auto md:px-12 md:py-4">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/assets/about-image.png"
            width={500}
            height={500}
            alt="About Image"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              About Me
            </h2>
            <p className="text-base text-black lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, React Native, Next.js, Node.js,
              Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick
              learner and I am always looking to expand my knowledge and skill
              set. I am a team player and I am excited to work with others to
              create amazing applications.
            </p>
            <div className="text-center">
              <h2 className="text-4xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                My Skills
              </h2>
              <MySkills />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
