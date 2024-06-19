import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import Button2 from "./ui/OutlineButton";
import AboutMeImg from "../assets/aboutMe.jpg";

const Hero = () => {
  const words = [
    "Stress Management Guru",
    "Work-Life Balance Champion",
    "Time Management Coach",
    "Health & Wellness Coach"
  ];

  return (
    <div className="w-full bg-hero-image bg-cover p-10">
      <Container className="py-20 flex justify-between">
        <div className="w-1/2 flex flex-col gap-y-5">
          <p className="text-2xl uppercase text-varDark">
            Wellness Within Studio
          </p>
          <h2 className="text-7xl font-bold text-white">
            Hi, I’m <span className="text-varDark">Deanna Constans</span>
          </h2>
          <h2 className="text-4xl font-headerFont font-bold text-white">
            your - {" "}
            <Typewriter
              words={words}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <h2 className="text-2xl text-varDark">Manage stress. Find balance. Change habits.</h2>
          <p className="text-xl text-lightText pr-45 font-bodyFont">
          I've worked in healthcare for over 30 years. I am a health and wellness coach certified by Mayo Clinic. 
           My passion is helping people find their WHY, identify their goals, and succeed in creating lasting change. 
          </p>
            <Link to="/work">
              <Button2 className="w-40 h-14" />
            </Link>
        </div>
        <div className="w-[45%] flex flex-col justify-center">
          <img
            src={AboutMeImg}
            alt="aboutMeImage"
            className="group-hover:scale-110 duration-500 rounded-md"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
