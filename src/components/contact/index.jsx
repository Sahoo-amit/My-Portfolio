import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import HeaderContent from "../../contents/header";
import { IoIosContact } from "react-icons/io";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const form = useRef();

  const sendToMail=()=>{
   setTimeout(() => {
    setUserEmail('')
    setUserMessage('')
    setUserName('')
    toast.success("Email send successfully");
   }, 2000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9uwjfbp", "template_ipofthe", form.current, {
        publicKey: "deFbEnNLVPu-Sucqx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <HeaderContent headertext="Contact me" icon=<IoIosContact /> />
      <div className="contact">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="outer-contact">
              <div className="inner-contact-one">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required
                  autoComplete="off"
                  value={userName} onChange={(e)=>setUserName(e.target.value)}
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your Email"
                  required
                  autoComplete="off"
                  value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}
                />
              </div>
              <div className="inner-contact-two">
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  cols={30}
                  rows={6}
                  autoComplete="off"
                  required
                  value={userMessage} onChange={(e)=>setUserMessage(e.target.value)}
                />
              </div>
            </div>
            <div id="btn">
              <button className="submit-btn" onClick={sendToMail}>Submit</button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
