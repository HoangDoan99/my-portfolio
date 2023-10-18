import React from "react";
import {
  SiEslint,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiPrettier,
  SiReact,
  SiRedux,
  SiServerless,
  SiTypescript,
  SiVim,
  SiJenkins,
  SiDocker,
  SiDotnet,
  SiFlutter,
  SiCsharp,
  SiDart,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiKubernetes,
  SiHtml5,
  SiSass,
  SiIonic,
  SiReduxsaga,
  SiSwagger,
  SiSemanticuireact,
  SiMaterialui,
  SiStyledcomponents,
  SiCircle,
  SiSignal,
  SiBootstrap,
  SiMix,
  SiNextdotjs,
  SiFigma,
} from "react-icons/si";

import css from "./Techs.module.scss";

const techList = [
  { name: "React", icon: <SiReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS/SCSS", icon: <SiSass /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Next", icon: <SiNextdotjs /> },
  { name: "REST API", icon: <SiSwagger /> },
  { name: "Ionic", icon: <SiIonic /> },
  { name: "SignalR", icon: <SiSignal /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Semantic UI", icon: <SiSemanticuireact /> },
  { name: "MUI", icon: <SiMix /> },
  { name: "Design", icon: <SiFigma /> },
  { name: "Styled-Components", icon: <SiStyledcomponents /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "CI/CD", icon: <SiCircle /> },
  { name: "ESLint", icon: <SiEslint /> },
  { name: "Prettier", icon: <SiPrettier /> },
];

const Techs = (
  <>
    {techList.map((tech) => (
      <div key={tech.name} className={css["tag"]}>
        <div>
          <span className="gold-text">{tech.icon}</span>
          <span>{tech.name}</span>
        </div>
      </div>
    ))}
  </>
);

export default Techs;
