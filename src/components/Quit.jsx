import React from "react";
import Container from "./Container";
import person from "../assets/portfolioImages/9.jpg";
import Button3 from "./ui/BookNowButton";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const QuitTobaccoCourse = () => {
  return (
    <Container className="bg-backgroundMedium">
      <h1 className="pl-10 pt-10 text-6xl font-headerFont text-varDark">Smoking Cessation</h1>
      <div className="flex flex-col">
        <div className="flex gap-5 pt-10 pl-5">
          <div className="w-[600px] p-5">
            <div className="overflow-hidden rounded-lg">
              <img
                src={person}
                alt="contact image"
                className="rounded-md group-hover:scale-110 duration-500"
              />
            </div>
            <div className="py-5 flex flex-col gap-2">
              <p className="w-[550px] text-xl text-design2Color font-light font-headerFont">Want to quit smoking? Ready to BREAK nicotine addiction? Ready to make a meaningful impact on your life? </p>
            </div>
          </div>
          <div className="w-2/3 pl-5 pr-[100px] rounded-lg flex flex-col gap-5">
            <div className="flex justify-between gap-7">
              <div className="flex flex-1 flex-col gap-5">
                <h1 className="text-4xl text-varDark font-headerFont">Choose Your Way to Quit</h1>
                <p className="text-2xl text-varDark font-light font-bodyFont pt-3">Everyone has a different way of quitting. Whether you’re curious about talking to a coach or trying a mix of our helpful tools, how you quit smoking, vaping or chewing is up to you.</p>
                <p className="text-2xl text-varDark font-light font-bodyFont pt-3">Most people who use commercial tobacco think about quitting at some point. Thinking through what motivates you to quit is a great first step. Once you know why you want to quit, it gets easier to focus on the benefits.</p>
              </div>
            </div>
          </div>
      </div>
          <div className="w-3/4 pl-10">
            <h2 className="text-2xl font-headerFont text-varDark pb-5">Course Overview</h2>
            <div className="border border-black border-x-0 border-t-[1.5px] border-b-[1.5px]">
              <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="text-xl text-black font-bodyFont pt-3">Duration</h3>
                  <div className="flex items-center">
                    <h4 className="pl-2 pr-2 text-black"><FaClock /></h4>
                    <h4 className="text-med text-black font-bodyFont">1 hr 45 min</h4>
                  </div>
              </div>
              <div className="flex flex-col">
              <h3 className="text-xl text-black font-bodyFont pt-3">Location</h3>
                <div className="flex items-center">
                  <h4 className="pl-2 pr-2 text-black"><FaMapMarkerAlt /></h4>
                  <h4 className="text-med text-black font-bodyFont">Online</h4>
                </div>
              </div>
              </div>
              <div className="w-[90%]">
                <h2 className="text-xl text-med font-bodyFont text-black pt-3">What You Will Learn</h2>
                <ul className="pl-20 py-5 w-[80%] list-disc">
                <li className="text-med font-med font-bodyFont text-black pl-3 pb-2">
                  You will understand that you are more likely than not, going to be part of a negative health statistic.
                </li>
                <li className="text-med font-med font-bodyFont text-black pl-3 pb-2">
                You will learn more about yourself and understand why you smoke.
                </li>
                <li className="text-med font-med font-bodyFont text-black pl-3 pb-2">
                  You will learn how to calculate your true financial cost of smoking.
                </li>
                <li className="text-med font-med font-bodyFont text-black pl-3 pb-2">
                  You will learn how to change your routine to avoid triggers.
                </li>
                <li className="text-med font-med font-bodyFont text-black pl-3 pb-2">
                  You will learn how to take action and stop smoking.
                </li>
                </ul>
              </div>
              </div>
              <div className="pt-10 flex justify-end">
                <a href="https://www.honeybook.com/meeting-scheduler?utm_source=google&utm_campaign=18522979387&utm_medium=cpc&utm_content=p&utm_term=booking%20app%20for%20business&placement=152223153294&device=c&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjw4MSzBhC8ARIsAPFOuyXu6OtRjKDPnoWYwnPm5U0bVX2IJSSKtiwVyKjbpYOfeWpfuB5cUuwaArdLEALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button3 className="w-[120px] h-10" />
                </a>
              </div>
          </div>
          
      </div>
    </Container>
  );
};

export default QuitTobaccoCourse;


