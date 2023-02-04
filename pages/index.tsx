import React, { useRef } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import Cursor from '../components/common/Cursor';
import InformationSection from '../components/portfolio/InformationSection';
import NameAndTitle from '../components/portfolio/NameAndTitle';
import Techs from '../components/portfolio/Techs';
import Interests from '../components/portfolio/Interests';
import Experiences from '../components/portfolio/Experiences';

import css from './index.module.scss';

const aboutMe = `A self-learning and open-minded Front End Developer with over 2 years of experience in analytics, designing, developing and maintaining Web Pages and cross-platform for Mobile Apps. Adept in JavaScript/TypeScript with a specialization in React JS. Seeking to leverage a diverse background and technical expertise to excel as a Front End Developer.`;

const Home: NextPage = () => {
  const $mail = useRef<HTMLAnchorElement>(null);
  const $github = useRef<HTMLAnchorElement>(null);
  const $linkedin = useRef<HTMLAnchorElement>(null);

  const $bakco = useRef<HTMLAnchorElement>(null);
  const $titkul = useRef<HTMLAnchorElement>(null);

  return (
    <div className={css['scroll-wrapper']}>
      <div className={css['wrapper']}>
        <Head>
          <title>{`<hoangdoan99 />`}</title>
        </Head>
        <Cursor
          $hoverables={[$mail, $github, $linkedin, $bakco, $titkul]}
        />
        {NameAndTitle({ $mail, $github, $linkedin })}
        <div className={css['information-wrapper']}>
          <div>
            <InformationSection header="About" content={aboutMe} />
            <InformationSection header="Tech" content={Techs} />
            <InformationSection header="Interests" content={Interests} />
          </div>
          <div>
            <InformationSection
              header="Experiences"
              content={Experiences({ $bakco, $titkul })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
