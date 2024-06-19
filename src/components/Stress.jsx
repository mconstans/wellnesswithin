import React from "react";
import Container from "./Container";
import candle from "../assets/portfolioImages/8.jpg";
import Button3 from "./ui/BookNowButton";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const StressCourse = () => {
  return (
    <Container className="bg-backgroundMedium">
      <h1 className="pl-10 pt-10 text-6xl font-headerFont text-varDark">Stress Management</h1>
      <div className="flex flex-col">
        <div className="flex gap-5 pt-10 pl-5">
          <div className="w-[600px] p-5">
            <div className="overflow-hidden rounded-lg">
              <img
                src={candle}
                alt="contact image"
                className="rounded-md group-hover:scale-110 duration-500"
              />
            </div>
            <div className="py-5 flex flex-col gap-2">
              <p className="w-[550px] text-xl text-design2Color font-light font-headerFont">Learn new techniques to manage stress and develop healthy coping mechanisms </p>
            </div>
          </div>
          <div className="w-2/3 pl-5 pr-[100px] rounded-lg flex flex-col gap-5">
            <div className="flex justify-between gap-7">
              <div className="flex flex-1 flex-col gap-5">
                <p className="text-2xl text-varDark font-light font-bodyFont pt-3">This course combines Mayo Clinic's stress management techniques and the most well-researched conventional medicine with the most well-researched, evidence-based complementary therapies to achieve the appropriate care for each person. If you're facing illness, your Mayo Clinic specialists can help integrate stress management into your overall treatment plan.</p>
                <p className="text-2xl text-varDark font-light font-bodyFont">These Mayo Clinic researchers developed a Stress Management and Resiliency Training (SMART) program for improving resiliency and quality of life, and lowering stress and anxiety. Studies have found the training to have positive results.</p>
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
                    <h4 className="text-med text-black font-bodyFont">4 hr 20 min</h4>
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
                <ul className="pl-20 py-5 list-disc">
                <li className="text-med font-med font-bodyFont text-black pl-3 pb-2">
                <strong>Counseling -  </strong> Talking about life and health-related stresses with a therapist can help you improve coping skills for difficult situations.
                </li>
                <li className="text-med font-med font-bodyFont text-black pl-3 pb-2">
                 <strong>Guided imagery - </strong> also called visualization. Picturing calming mental images of relaxing places and settings can help you cope with negative emotions, feelings or events.
                </li>
                <li className="text-med font-med font-bodyFont text-black pl-3 pb-2">
                <strong>Progressive muscle relaxation - </strong>Tensing and relaxing the muscle groups throughout the body in turn can help calm anxious feelings.
                </li>
                <li className="text-med font-med font-bodyFont text-black pl-3 pb-2">
                <strong>Resilience training - </strong> Learning to be more purposeful about perceptions can lessen negative thoughts and help build resilience. Resilience is a skill that helps speed recovery after stress.
                </li>
                <li className="text-med font-med font-bodyFont text-black pl-3 pb-2">
                <strong>Mindfulness exercises - </strong> This form of meditation teaches you to be deeply aware of what you're sensing and feeling at every moment, without interpretation or judgment.
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

export default StressCourse;


