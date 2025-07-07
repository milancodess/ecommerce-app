import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const newDate = new Date();
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            aliquid voluptatibus, necessitatibus dicta minus provident facere
            error minima magnam eligendi nemo ab fugiat molestiae nesciunt
            aperiam totam rerum obcaecati sint!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+977 981-234-5678</li>
            <li>contact@foreveryou.com.np</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright {newDate.getFullYear()}@ forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
