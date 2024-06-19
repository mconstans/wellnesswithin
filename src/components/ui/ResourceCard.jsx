import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ResourceCard = ({ item }) => {
  return (
    <div className="w-full p-5 bg-backgroundLight shadow-lg shadow-gray-500/10 rounded-lg ">
      <a href={item.link} target="_blank">
        <div className="h-72 rounded-lg overflow-hidden relative group">
          <img
            src={item.img}
            alt="image one"
            className="w-full h-full object-contain group-hover:scale-110 duration-500"
          />
        </div>
        <div className="flex flex-col gap-5 pt-5">
          <p className="text-xs font-semibold uppercase text-varDark">
            {item.subtitle}
          </p>
          <div>
            <h2 className="text-xl font-medium text-varDark hover:text-design2Color duration-300 cursor-pointer relative group overflow-hidden">
              {item.title}
              <span className="absolute bottom-0 translate-y-5 -translate-x-5 group-hover:translate-y-0 group-hover:translate-x-0 duration-500">
                <MdArrowOutward />
              </span>
            </h2>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ResourceCard;
