import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { imgOne } from "../../assets/getImage";
import { AiOutlineMenu } from "react-icons/ai";

const BannerCard = ({ item }) => {
  return (
    <div className="w-full">
      <a href={item.link} target="_blank">
        <div className="w-full h-72 overflow-hidden relative group">
          <img
            src={item.img}
            alt="image one"
            className="w-full h-full object-cover group-hover:scale-110 duration-500"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase text-varDark">
            {item.subtitle}
          </p>
        </div>
      </a>
    </div>
  );
};

export default BannerCard;
