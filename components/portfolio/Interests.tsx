import React from "react";
import {
  RiTerminalBoxLine,
  RiMusic2Line,
  RiMovie2Line,
  RiYoutubeLine,
  RiGlobalFill,
} from "react-icons/ri";

import css from "./Interests.module.scss";

const interestList = [
  { name: "Code", icon: <RiTerminalBoxLine /> },
  { name: "Music", icon: <RiMusic2Line /> },
  { name: "Movie", icon: <RiMovie2Line /> },
  { name: "Social activities", icon: <RiGlobalFill /> },
];

const Interests = (
  <>
    {interestList.map((interest) => (
      <div key={interest.name} className={css["wrapper"]}>
        <span className="gold-text">
          {interest.icon}
          <span>{interest.name}</span>
        </span>
      </div>
    ))}
  </>
);

export default Interests;
