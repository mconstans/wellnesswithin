import React from "react";
import Container from "./Container";
import MyStoryImg from "../assets/deanna.jpg";
import Button from "./ui/Button";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";

const MyStory = () => {
  return (
    <Container className="flex justify-between p-10">
      {/* Left part */}
      <div className="flex w-[35%] h-[35%] items-end bg-buttonColor p-5 rounded-lg shadow-md shadow-black overflow-hidden group">
        <div className="w-full overflow-hidden rounded-md">
          <img
            src={MyStoryImg}
            alt="aboutMeImage"
            className="h-full w-full group-hover:scale-110 duration-500 rounded-md"
          />
        </div>
      </div>
      {/* Right part */}
      <div className="w-[55%] mr-10 flex flex-col justify-center gap-7">
        <Subtitle title="About Me" />
        <Title title="Meet Deanna" />
        <p className="font-bodyFont">
        I have been on a journey for the past 30 years to improve and maintain my health, to seek solutions for work/life balance and stress reduction.  As the world changes more rapidly than ever, there is enormous pressure to be resilient and adapt to the changes before us.   My mission is to help others with their unique wellness journey, through nonjudgmental, compassionate, and confidential coaching.
        </p>
        <p className="font-bodyFont">
        My Health and Wellness Coach training and certification is through the esteemed Mayo Clinic Health and Wellness Coach Training program. I am currently in the process of completing my national board certification through the respected National Board for Health and Wellness Coaching (NBHWC).  
        </p>
      </div>
    </Container>
  );
};

export default MyStory;
