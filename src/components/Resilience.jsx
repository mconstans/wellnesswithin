import React from "react";
import Container from "./Container";
import sparkler from "../assets/sparkler.jpg";
import Button3 from "./ui/BookNowButton";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const ResilienceCourse = () => {
  return (
    <Container className="bg-backgroundMedium">
      <h1 className="pl-10 pt-10 text-6xl font-headerFont text-varDark">Mindfulness & Resilience <br></br>to Stress</h1>
      <div className="flex flex-col">
        <div className="flex gap-5 pt-10 pl-5">
          <div className="w-[600px] p-5">
            <div className="overflow-hidden rounded-lg">
              <img
                src={sparkler}
                alt="contact image"
                className="rounded-md group-hover:scale-110 duration-500"
              />
            </div>
            <div className="py-5 flex flex-col gap-2">
              <p className="w-[550px] text-xl text-design2Color font-light font-headerFont">Part of our three-course professional certificate program on The Science of Happiness at Work, offered through the premiere online learning destination, edX. </p>
            </div>
          </div>
          <div className="w-2/3 pl-5 pr-[100px] rounded-lg flex flex-col gap-5">
            <div className="flex justify-between gap-7">
              <div className="flex flex-1 flex-col gap-5">
                <p className="text-2xl text-varDark font-light font-bodyFont pt-3">Resilience training teaches you how to focus on the better parts of life and adapt to tough events. It gives you tools to handle problems that come up. Being more resilient can improve your quality of life, increase emotional strength, and lessen stress and worry.</p>
                <p className="text-2xl text-varDark font-light font-bodyFont">Mindfulness and Resilience to Stress at Work offers research-based strategies for building resilience to stress and fortifying our well-being in the face of challenges.</p>
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
                    <h4 className="text-med text-black font-bodyFont">2 hr 10 min</h4>
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
              <p className="text-med font-med font-bodyFont text-black p-5">This course explains the biological and psychological impact of stress, helps you distinguish between harmful and helpful forms of stress at work, and provides strategies for handling stress in healthy and productive ways.</p>
              <p className="text-med font-med font-bodyFont text-black pl-5 pb-10">This 2 hour course is based on the book, The Mayo Clinic Guide to Stress Free Living. During this session you will explore and practice SMART principles to implement into your life to reduce stress and improve resilience.</p>
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

export default ResilienceCourse;


