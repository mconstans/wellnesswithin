import { NavLink, Link } from "react-router-dom";
import logo from "../assets/deanna_bio.png";
import Button from "./ui/Button";

const Header = () => {
  const navigationArray = [
    { title: "Home", link: "/" },
    { title: "My Story", link: "/story" },
    { title: "Services", link: "/services" },
    { title: "Resources", link: "/resources" },
    { title: "Work With Me", link: "/work" },
  ];

  return (
    <header className="w-full h-20 bg-[#2E5252]/90 backdrop-blur-2xl sticky top-0 z-50 relative">
      <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between pl-10 pr-10">
        <div className="absolute top-0 left-10 p-2">
          <Link to="/">
            <img src={logo} alt="Deanna's bio" className="w-[65px] h-[65px]" />
          </Link>
        </div>
        <nav className="flex items-center gap-6 ml-auto">
          {navigationArray.map(({ title, link }) => (
            <NavLink
              key={link}
              to={link}
              className={({ isActive }) =>
                `${isActive ? "text-designColor" : "text-lightText"} text-medium font-headerFont hover:text-buttonHover cursor-pointer duration-300`
              }
            >
              {title}
            </NavLink>
          ))}
            <Link to="/work">
                <Button className="w-28 h-10 uppercase" />
            </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;