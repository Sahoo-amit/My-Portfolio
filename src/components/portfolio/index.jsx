import React from "react";
import HeaderContent from "../../contents/header";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./style.css";

const Portfolio = () => {
  const myProjects = [
    {
      name: "Pokemon App",
      to: "https://amit-pokemon.netlify.app/",
      img: "/pokemon.jpg",
    },
    {
      name: "Todo App",
      to: "https://todo-amit.netlify.app/",
      img: "/to-do-list-apps.png",
    },
    {
      name: "Classical Snake Game",
      to: "https://sahoo-amit.github.io/Classical-Snake-Game/",
      img: "/snake-game.webp",
    },
    {
      name: "Weather App",
      to: "https://sahoo-amit.github.io/Weather-App/",
      img: "/weather.webp",
    },
    {
      name: "Music Player App",
      to: "https://sahoo-amit.github.io/Music-App/",
      img: "/music.webp",
    },
    {
      name: "Rock Paper Scissor",
      to: "https://sahoo-amit.github.io/Rock-Paper-Scissor/",
      img: "/game-rock-paper-scissors.webp",
    },
    {
      name: "E-commerce App",
      to: "#",
      img: "/e-commerce.avif",
    },
  ];

  return (
    <div className="content">
      <HeaderContent headertext={"Portfolio"} icon={<GrProjects />} />
      <div className="portfolio">
        <div className="project">
          {myProjects.map((item, index) => {
            return (
              <div key={index} className="project-list">
                <img src={item.img} alt="" />
                <div className="details">
                  <p>{item.name}</p>
                  <Link to={item.to} target="_" className="amit">
                    Click Here
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
