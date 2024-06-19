import React from "react";
import Container from "./Container";
import Subtitle3 from "./ui/Subtitle3";
import Title3 from "./ui/Title3";
import ResourceCard from "./ui/ResourceCard";
import { resourceData } from "../constant/data";

const Resources = () => {
  return (
    <Container className="bg-backgroundMedium">
      <div className="flex flex-col items-center">
        <Subtitle3 title3="Helpful tools for living your best life" />
        <Title3 title3="Resources" />
      </div>
      <div className="grid grid-cols-3 gap-5 pt-10 pl-20 pr-20">
        {resourceData.map((item) => (
          <ResourceCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Resources;
