import React, { useState } from "react";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import Container from "./Container";
import { contact1 } from "../assets/getImage";

import SocialIcon from "./ui/SocialIcon";

const WorkWithMe = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");
  const handleSubmit = () => {
    console.log(userName, phone, email, subject, messages);
    setUserName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessages("");
  };
  return (
    <Container className="bg-varDark">
      <div className="flex flex-col items-center">
        <Subtitle title="Contact" />
        <Title title="Connect With Me" />
      </div>
      <div className="flex gap-10 pt-10">
        <div className="w-1/3 p-10">
          <div className="overflow-hidden rounded-lg">
            <img
              src={contact1}
              alt="contact image"
              className="rounded-md group-hover:scale-110 duration-500"
            />
          </div>
          <div className="py-5 flex flex-col gap-2">
            <p className="text-2xl text-white font-bold font-headerFont">Deanna Constans</p>
            <p className="text-lg font-medium font-bodyFont">Health & Wellness Coaching</p>
            <p className="text-base font-light font-bodyFont">
              I am available for freelance work. Connect with me via email or facebook.
            </p>
            <p className="text-base">
              Email: <span className="text-white">coachwellnesswithin@gmail.com</span>
            </p>
          </div>
          <SocialIcon />
        </div>
        <div className="w-2/3 p-10 rounded-lg flex flex-col gap-5">
          <div className="flex justify-between gap-7">
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm uppercase">Your name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="inputStyle"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm uppercase">Phone Number</p>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="inputStyle"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Email</p>
            <input
              type="email"
              placeholder="Enter your Email"
              className="inputStyle"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Subject</p>
            <input
              type="text"
              placeholder="Define a subject"
              className="inputStyle"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Your Message</p>
            <textarea
              type="text"
              placeholder="Enter your message..."
              className="inputStyle"
              cols={1}
              rows={3}
              onChange={(e) => setMessages(e.target.value)}
              value={messages}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="border-[1px] border-static py-2 rounded-md hover:bg-hover duration-300 uppercase hover:text-title3Color"
          >
            Send Message
          </button>
        </div>
      </div>
    </Container>
  );
};

export default WorkWithMe;
