import React from "react";
import Container from "./Container";
import logo from "../assets/deanna_bio.png";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import SocialIcon from "./ui/SocialIcon";

const Footer = () => {
  return (
    <div className="bg-title3Color">
      <Container className="px-10 flex items-center text-lightText justify-between py-5">
        <img src={logo} alt="logo" className="w-14" />
        <p className="text-sm font-bodyFont lowercase hover:text-white duration-300 ">
          @ 2023 Megan Constans
        </p>
        <SocialIcon />
      </Container>
    </div>
  );
};

export default Footer;
