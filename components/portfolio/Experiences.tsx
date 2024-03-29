import React, { RefObject } from "react";

import css from "./Experience.module.scss";

interface ExperienceRefs {
  $bakco: RefObject<HTMLAnchorElement>;
  $titkul: RefObject<HTMLAnchorElement>;
}

const experienceList = (refs: ExperienceRefs) => [
  {
    role: "Front-End Developer",
    company: "Bakco",
    companyURL: "https://www.bakco.com.vn/",
    ref: refs.$bakco,
    period: "April 2021 — Sep 2023",
    // prettier-ignore
    details: (
      <>
        <p className={css['detail']}>
          <span>
            <div>
            - Used advanced JavaScript/Typescript and React library to develop and maintain for Web applications.
            </div>
            <div>
            - Worked with team based on Agile methodology .
            </div>
            <div>
            - Research new technology platform and use for creating cross-platform for apps.
            </div>
            <div>
            - Hangle bugs and technical problems in the project.
            </div>
            <div>
            - Mentoring for new members. 
            </div>
          </span>
        </p>
        <p className={css['detail']}>
          <span>
            Develop several web apps and cross-platform apps like:
            <br />• <b>DATAHUB</b> for <b> USAID (United States Agency of International Development) </b> provice service for data management system (data collection, consolidation, processing, storage, modelling and visualization) that provide useful insights to guide in decision making.
            <br />• <b>CHIS</b> as a <b>cross platform app for USAID </b>to help people and officials to use and exchange information about HIV disease and treatment .
            <br />• <b>KP-elog</b> for <b>LIFE </b> - It provides customers with an easy, secure and quick way to order biologicals products, manage and track the order history...  
            <br />• <b>Infectious Disease Management System</b> for <b>HCDC (HCMC Center for
            Disease Control)</b> to investigate, trace, link people (covid-19, measles and hand foot mouth disease) .
            <br />• <b>Vaccination Booking </b> for <b>City Heart Institute in Ho Chi Minh city</b> to helps people book vaccination at clinics with time slot.
            <br />• <b>CDS (Control Disease System)</b> for <b>HCDC (HCMC Center for
            Disease Control)</b>  to record and manage the Covid-19 infection chains in Ho Chi Minh city. 
          </span>
        </p>
      </>
    ),
  },
  {
    role: "Front-End Developer",
    company: "Titkul",
    companyURL: "https://www.titkul.com/",
    ref: refs.$titkul,
    period: "June 2020 — December 2020",
    // prettier-ignore
    details: (
      <>
        <p className={css['detail']}>
          <span>
          <div>
            - Used advanced JavaScript/Typescript and React library to develop and maintain for Web applications.
            </div>
            <div>
            - Worked with team to analyze and come up with solutions.
            </div>
          </span>
        </p>
        <p className={css['detail']}>
          <span>
          <div>
            Project:
            </div>
            Outsourced for <b>Viet Thang Jean</b> to help build an admin dashboard that manages human resources (information, attendances, benefits,...)
          </span>
        </p>
      </>
    ),
  },
];

const Experiences = (refs: ExperienceRefs) => (
  <>
    {experienceList(refs).map((experience) => (
      <div key={experience.period} className={css["wrapper"]}>
        <div className={css["timeline"]}>
          <div className={css["icon"]}>
            <div>
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                data-view-component="true"
                className="octicon octicon-briefcase"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0121.25 22H2.75A1.75 1.75 0 011 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5V1.75zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 00.25-.25v-8.26A4.233 4.233 0 0118.75 13H5.25a4.233 4.233 0 01-2.75-1.01zm19-3.24a2.75 2.75 0 01-2.75 2.75H5.25A2.75 2.75 0 012.5 8.75v-3a.25.25 0 01.25-.25h18.5a.25.25 0 01.25.25v3zm-6.5-7V4H9V1.75a.25.25 0 01.25-.25h5.5a.25.25 0 01.25.25z"
                ></path>
              </svg>
              <div className={css["shadow"]} />
            </div>
          </div>
          <div className={css["linear"]} />
        </div>
        <div className={css["content"]}>
          <p className={css["company-role"]}>
            <b>
              <span className={css["role"]}>{experience.role}</span>
            </b>
            <span>&nbsp;at&nbsp;</span>
            <b>
              <a
                className={css["company"]}
                ref={experience.ref}
                href={experience.companyURL}
                target="_blank"
                rel="noreferrer"
              >
                <span>{experience.company}</span>
              </a>
            </b>
          </p>
          <span className={css["period"]}>
            <span>{experience.period}</span>
          </span>
          {experience.details}
        </div>
      </div>
    ))}
  </>
);

export default Experiences;
