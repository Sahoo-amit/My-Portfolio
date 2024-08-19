import React from "react";
import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

const Home = () => {
  const navigator = useNavigate()
  const handleNavigate=()=>{
    navigator('/contact')
  }

  const myData = [
    {
      icon: <FaLinkedin />,
      iconName: "Linkedin",
      to: "https://www.linkedin.com/in/amit-s-919a5a289/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BAPM%2BT71xT9CPYlr%2BAo%2FeUA%3D%3D",
    },
    {
      icon: <FaGithub />,
      iconName: "Github",
      to: "https://github.com/Sahoo-amit",
    },
    {
      icon: <FaInstagram />,
      iconName: "Instagram",
      to: "https://www.instagram.com/sah00_amit?utm_source=qr&igsh=MTExOGQ1eDNoMm1qMQ==",
    },
    {
      icon: <FaTelegram />,
      iconName: "Telegram",
      to: "https://t.me/Morbius53",
    },
  ];
  return (
    <div className="container">
      <div className="headings">
        <h1>
          Hello, I'm <span>Amit</span>
        </h1>
        <h1>Frontend Developer</h1>
      </div>
      <div>
        <button onClick={handleNavigate}>Hire Me</button>
        <button><Link to={'/resume.pdf'} target="_blank" className="resume">Download Resume</Link></button>
      </div>
      <div className="icons">
        {myData.map((item, index) => {
          return (
            <div key={index}>
              <Link
                to={item.to} className="icon-list" target="_blank"
              >
                {item.icon}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
