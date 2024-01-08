import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDev, FaWindows } from "react-icons/fa";
import { SiVisualstudiocode, SiJavascript } from "react-icons/si";
const personalDetails = [
  {
    label: "Name",
    value: "Jacob Catalina",
  },
  {
    label: "Age",
    value: "20",
  },
  {
    label: "Address",
    value: " Northville MI, 48436 Binghampton Dr",
  },
  {
    label: "Email",
    value: "jacobcatalina01@gmail.com",
  },
  {
    label: "Contact No",
    value: "+1 248-378-8543",
  },
];

const jobSummary =
  "My name is Jacob Catalina. I am a Junior attending the University of Michigan pursuing a Bachelor's degree in Computer Science. I am greatly interested in fullstack software engineering as well as game development as these are my biggest passions in CompSci. Outside of school/work,some of my hobbies include lifting weights, making music, and gaming.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Get To Know Me</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaWindows size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <SiJavascript size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <SiVisualstudiocode size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
