import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "URQT STUDIOS",
    image: ImageOne,
    link: "https://urqt-studios.itch.io/modern-knight",
  },
  {
    id: 3,
    name: "SOUNDCLOUD",
    link: "https://soundcloud.com/remato1",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "GIT HUB",
    image: ImageThree,
    link: "https://github.com/CyberJaba",
  },
  
  
];






const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Sound Design",
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
                    <a href="https://urqt-studios.itch.io/modern-knight">
                    <button>URQT STUDIOS</button>
                    </a>

                    <p>{item.name}</p>
                    <a href="https://github.com/CyberJaba">
                    <button>GIT HUB</button>
                    </a>

                    <p>{item.name}</p>
                    <a href="https://soundcloud.com/remato1">
                    <button>SOUNDCLOUD</button>
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
