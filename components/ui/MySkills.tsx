import React from "react";
import Marquee from "../magicui/marquee";
import MySkillsContainer from "./MySkillsContainer";

interface MySkills {
  id: number;
  title: string;
  imageUrl: string;
}

const myskills: MySkills[] = [
  {
    id: 1,
    title: "HTML",
    imageUrl: "/myskillsImg/newHTML.jpg",
  },
  {
    id: 2,
    title: "CSS",
    imageUrl: "/myskillsImg/newcss.jpg",
  },
  {
    id: 3,
    title: "JavaScript",
    imageUrl: "/myskillsImg/newjs.jpeg",
  },
  {
    id: 4,
    title: "React",
    imageUrl: "/myskillsImg/newReact.png",
  },
  {
    id: 5,
    title: "Next.js",
    imageUrl: "/myskillsImg/newNextjs.png",
  },
  {
    id: 6,
    title: "React Native",
    imageUrl: "/myskillsImg/newRN.png",
  },
  {
    id: 7,
    title: "Node.js",
    imageUrl: "/myskillsImg/newNode.jpeg",
  },
  {
    id: 8,
    title: "Git & GitHub",
    imageUrl: "/myskillsImg/newGit.png",
  },
];

export default function MySkills() {
  return (
    <Marquee>
      {myskills.map((myskill) => (
        <div key={myskill.id}>
          <MySkillsContainer imageUrl={myskill.imageUrl} />
          <h5 className="text-xl text-[#ADB7BE] font-semibold mb-2">
            {myskill.title}
          </h5>
        </div>
      ))}
    </Marquee>
  );
}
