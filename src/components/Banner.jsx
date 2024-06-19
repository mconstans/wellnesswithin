import React from "react";
import BannerCard from "./ui/BannerCard";
import { bannerData } from "../constant/data";

const Banners = () => {
  return (
      <div className="grid grid-cols-3">
        {bannerData.map((item) => (
          <BannerCard key={item.id} item={item} />
        ))}
      </div>
  );
};

export default Banners;
