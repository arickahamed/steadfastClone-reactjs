import React, { useEffect, useState } from "react";
import logo from "../images/steadfast_logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    console.log("clicked");
  };
  console.log(open);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full text-[16px] m-auto sticky top-0 left-0 ${
        scrolled ? "bg-customWhite shadow-md" : "bg-transparent"
      }`}
    >
      {/* logo and hamburger part is here */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] flex justify-between items-center mx-auto py-5">
        <div className="flex justify-evenly items-center w-[65%] md:w-[30%] lg:w-[25%]">
          <div className="block md:hidden lg:hidden" onClick={handleClick}>
            <RxHamburgerMenu />
          </div>
          <div className="w-[50%] md:w-[70%] lg:w-[60%]">
            <NavLink to="/">
              <img src={logo} className="w-[70%] md:w-[80%]" alt="steadfast" />
            </NavLink>
          </div>
        </div>

        {/* this is movie view of navbar */}
        <div onClick={() => setOpen(false)}
          className={`absolute md:hidden lg:hidden transfrom transition-transform ease-in-out delay-150 duration-100 ${
            open ? " top-[70%] w-[95%] m-auto bg-customWhite h-screen text-center" : "top-[-105%]"
          }`}
        >
          <ul className={`flex flex-col ${open?" text-[25px] h-[50%] justify-around items-center": ""}`}>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/coverage">Converage</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* this is for desktop view of navbar */}
        <div className={`hidden md:block lg:block md:w-[42%] lg:w-[50%]`}>
          <ul
            className={`flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between lg:items-center`}
          >
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/coverage">Converage</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* here we have login signup button */}
        <div className="w-[35%] md:w-[22%] lg:w-[18%] flex justify-between sm:justify-evenly md:justify-evenly lg:justify-evenly items-center">
          <div>
            {" "}
            <NavLink to="/login">Login</NavLink>{" "}
          </div>
          <div className="bg-customCyan text-customWhite py-2 px-3 md:py-3 rounded-md">
            {" "}
            <NavLink to="/signup"> Signup </NavLink>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
