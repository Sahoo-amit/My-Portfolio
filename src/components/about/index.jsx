import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import HeaderContent from "../../contents/header";
import { BsFillInfoCircleFill } from "react-icons/bs";
import profile from "../../assets/profile.png";

const About = () => {
  return (
    <div>
      <HeaderContent headertext={"About me"} icon={<BsFillInfoCircleFill />} />
      <div className="about">
        <div className="left-item">
          <div className="item1">
            <h3>Frontend Developer</h3>
            <p>
              Currently pursuing{" "}
              <b>
                <i>Master of Computer Applications</i>
              </b>{" "}
              (MCA) with a focus on <b style={{color:"lime"}}>web development</b>, there is a deep-seated
              passion for creating innovative web solutions. The journey in
              technology has been one of continuous learning and growth. <br />
              Throughout the academic career, practical experience has been
              prioritized alongside theoretical studies. A notable highlight
              includes a <b style={{color:"lime"}}>3-month internship</b> specializing in the <b style={{color:"lime"}}>MERN stack</b>
              (MongoDB, Express.js, React, and Node.js). This opportunity
              allowed for hands-on involvement in real-world projects, providing
              a comprehensive understanding of building modern, scalable web
              applications. <br /> During this internship, significant skills were
              developed in both front-end and back-end development. Proficiency
              was achieved in JavaScript, React, Node.js, and MongoDB, along
              with expertise in using Tailwind CSS to design responsive and
              visually appealing user interfaces. The experience also emphasized
              the importance of teamwork, agile methodologies, and effective
              communication, all of which have contributed to a well-rounded
              skill set. The current skill
              set includes: <br /> <b style={{color:"#C78CE4"}}>JavaScript</b> : Writing clean, efficient code for
              dynamic web applications. <br /><b  style={{color:"#C78CE4"}}>React</b> : Building interactive UIs and
              managing application state. <br /><b style={{color:"#C78CE4"}}>Tailwind CSS</b> : Designing responsive and
              visually appealing web interfaces. <br /><b style={{color:"#C78CE4"}}>Node.js</b> : Developing scalable
              server-side applications. <br /><b style={{color:"#C78CE4"}}>MongoDB</b> : Managing databases and ensuring
              data integrity. 
            </p>
          </div>
          <div className="item2">
            <h3>Personal Information</h3>
            <div className="info">
              <div className="info-left">
                <p>Name :</p>
                <p>Address :</p>
                <p>Mob-no :</p>
                <p>Email :</p>
              </div>
              <div className="info-right">
                <p>Amit Shaoo</p>
                <p>Cuttack, Odisha</p>
                <p>
                  <a href="tel: 6371392025">6371392025</a>
                </p>
                <p>
                  <a href="mailto:amitsahooamit123@gmail.com">
                    amitsahooamit123@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-item">
          <div className="profile-img">
            <img src={profile} alt="" />
            <div className="back-div"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
