import React from "react";
import Container from "./Container";
import Subtitle2 from "./ui/Subtitle2";
import icon from "../assets/sun.svg";
import Title2 from "./ui/Title2";
import { serviceData } from "../constant/data";
import ServiceCard from "./ui/ServiceCard";

const Services = () => {

  return (
    <Container className="bg-backgroundLight flex flex-col items-center gap-7">
          <img
            src={icon}
            alt="sun icon"
            className="w-[80px]"
          />
            <Title2 title2="My Specializations" />
            <div className="w-[650px] pt-10 text-center">
            <Subtitle2 title2="I specialize in stress reduction and resiliency.  I also provide health and wellness coaching for a variety of needs including:" />
            </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-5 pt-10 pl-20 pr-20">
        {serviceData.map((item) => (
          <ServiceCard key={item.id} item={item} link={item} />
        ))}
      </div>
    </Container>
  );
};

export default Services;
