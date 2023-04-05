import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="container mx-auto flex justify-between items-center p-4 mb-[6rem]">
      <img
        src="../../public/logo.svg"
        alt="bike logo"
        className="w-[60px] hover:cursor-pointer hover:bg-white transition"
      />
      <nav className="">
        <ul className="w-50%">
          <li className="dark:text-white">
            <a href="#">Test</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
