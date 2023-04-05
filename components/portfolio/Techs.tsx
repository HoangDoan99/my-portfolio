import React from 'react';
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
  SiBootstrap
} from 'react-icons/si';

import css from './Techs.module.scss';

const techList = [
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS/SASS', icon: <SiSass /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'REST API', icon: <SiSwagger /> },
  { name: 'Ionic', icon: <SiIonic /> },
  { name: 'Semantic UI', icon: <SiSemanticuireact /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Styled-Components', icon: <SiStyledcomponents /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'CI/CD', icon: <SiCircle /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'ESLint', icon: <SiEslint /> },
  { name: 'SignalR', icon: <SiSignal /> },
  { name: 'Prettier', icon: <SiPrettier /> },
];

const Techs = (
  <>
    {techList.map((tech) => (
      <div key={tech.name} className={css['tag']}>
        <div>
          <span className="gold-text">{tech.icon}</span>
          <span>{tech.name}</span>
        </div>
      </div>
    ))}
  </>
);

export default Techs;
