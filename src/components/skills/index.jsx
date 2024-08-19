import React from "react";
import HeaderContent from "../../contents/header";
import { FaReact, FaNode } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import "./style.css";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Skill = () => {

  const mySkill =[
    {
      name: "JavaScript",
      percentage: "90%"
    },
    {
      name: "html",
      percentage: "95%"
    },
    {
      name: "css",
      percentage: "90%"
    },
    {
      name: "React.js",
      percentage: "85%"
    },
    {
      name: "TypeScript",
      percentage: "90%"
    },
    {
      name: "Tailwind CSS",
      percentage: "93%"
    },
    {
      name: "Mongo DB",
      percentage: "80%"
    },
    {
      name: "node js",
      percentage: "90%"
    },
    {
      name: "EXPRESS js",
      percentage: "88%"
    },
  ]
  return (
    <div>
      <HeaderContent headertext={"My skills"} icon={<BsFillInfoCircleFill />}/>
      <div className="skill">
        <div className="skill-list">
          <div className="skill-left">
            {
              mySkill.map((item,index)=>{
                return(
                  <div key={index} className="skill-items">
                    <div className="skill-items-left">
                      {item.name}
                    </div>
                    <div className="skill-items-right">
                      <div className="value" style={{width:item.percentage}}></div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="skill-right">
            <div className="circle">
            <div className="images">
              <div>
                <FaReact size={60} />
              </div>
              <div>
                <SiMongodb size={60} />
              </div>
              <div>
                <SiExpress size={60} />
              </div>
              <div>
                <FaNode size={60} />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
