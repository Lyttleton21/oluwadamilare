import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MySkillsContainer({ children }: Props) {
  return <div className="object-cover w-1/4">{children}</div>;
}
