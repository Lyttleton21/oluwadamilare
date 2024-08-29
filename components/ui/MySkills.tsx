import React from "react";
import Marquee from "../magicui/marquee";
import Image from "next/image";
import HTML from "@/public/myskillsImg/HTML.png";
import CSS from "@/public/myskillsImg/CSS.png";
import JS from "@/public/myskillsImg/Js.png";
import GIT from "@/public/myskillsImg/git1.png";
import GITHUB from "@/public/myskillsImg/github1.png";
import REACT from "@/public/myskillsImg/react1.png";
import NEXT from "@/public/myskillsImg/next1.png";
import REACTNATIVE from "@/public/myskillsImg/reactNative.png";
import NODE from "@/public/myskillsImg/nodejs.png";
import SOLIDITY from "@/public/myskillsImg/solidity.png";
import TS from "@/public/myskillsImg/TS1.png";
import MySkillsContainer from "./MySkillsContainer";

export default function MySkills() {
  return (
    <div>
      <div className="bg-white w-full">
        <Marquee>
          <MySkillsContainer>
            <Image src={HTML} alt="HTML5 Logo" width={300} height={400} />
          </MySkillsContainer>
          <MySkillsContainer>
            <Image src={CSS} alt="CSS Logo" width={300} height={80} />
          </MySkillsContainer>
          <MySkillsContainer>
            <Image src={JS} alt="JS Logo" width={300} height={300} />
          </MySkillsContainer>
          <MySkillsContainer>
            <Image src={TS} alt="Github Logo" width={300} height={300} />
          </MySkillsContainer>
          <MySkillsContainer>
            <Image src={GIT} alt="Github Logo" width={300} height={300} />
          </MySkillsContainer>
          <MySkillsContainer>
            <Image src={GITHUB} alt="Github Logo" width={300} height={300} />
          </MySkillsContainer>
          <MySkillsContainer>
            <Image src={REACT} alt="Github Logo" width={300} height={300} />
          </MySkillsContainer>
          <MySkillsContainer>
            <Image src={NEXT} alt="Github Logo" width={300} height={300} />
          </MySkillsContainer>
          <MySkillsContainer>
            <Image
              src={REACTNATIVE}
              alt="Github Logo"
              width={300}
              height={300}
            />
          </MySkillsContainer>
          <MySkillsContainer>
            <Image src={NODE} alt="Github Logo" width={300} height={300} />
          </MySkillsContainer>
          <MySkillsContainer>
            <Image src={SOLIDITY} alt="Github Logo" width={300} height={300} />
          </MySkillsContainer>
        </Marquee>
      </div>
    </div>
  );
}
