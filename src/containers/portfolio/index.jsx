import React from "react";
import { FaGithub } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.PNG";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.JPG";
import ImageFive from "../../images/curse.png";
import ImageSix from "../../images/medic.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 3,
    name: "Personal Website V2",
    image: ImageOne,
    skills: "React,NodeJS,JavaScript,CSS",
    github: "https://github.com/jacobcatalina01/Personal-Website",
    link: "https://sld-studios.itch.io/roots-renewal-of-bloom"
  },
  {
    id: 2,
    name: "Roots Renewal of Bloom",
    github: "https://github.com/jacobcatalina01/Roots-Renewal-of-Bloom/tree/main",
    link: "https://sld-studios.itch.io/roots-renewal-of-bloom",
    skills: "C#,Unity,Vr",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Raptor Tractors",
    image: ImageThree,
    skills: "C#,Unity",
    github: "https://github.com/jazoland26/Raptor-Tractors",
    link: "https://sld-studios.itch.io/raptor-tractors"
  },
  {
    id: 2,
    name: "Personal Website V1",
    image: ImageFour,
    skills: "JavaScript,HTML,CSS",
    github: "https://github.com/jacobcatalina01/jacobcatalina01.github.io",
    link: "https://jacobcatalina01.github.io/"
  },
  {
    id: 2,
    name: "Curse or Treat",
    image: ImageFive,
    skills: "C#,Unity",
    github: "https://github.com/jacobcatalina01/Curse-Or-Treat",
    link: "https://sld-studios.itch.io/curse-or-treat"
  },
  {
    id: 2,
    name: "Monkey Medic",
    image: ImageSix,
    skills: "C#,Unity",
    github: "https://github.com/jacobcatalina01/Curse-Or-Treat",
    link: "https://sld-studios.itch.io/monkey-medic"
  }
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Finished",
  },
  {
    filterId: 3,
    label: "In Progress",
  },
];

const Portfolio = () => {
  
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);
  
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, "_blank")}>Visit</button>
                    <b>Skills: {item.skills}</b>
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={30} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
