import React from "react";
import Logo from "../assets/MovieLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={Logo} alt="movie-logo" />
      <Link to="/" className="text-blue-500 font-bold text-3xl">
        Moveis
      </Link>
      <Link to="/watchlist" className="text-blue-500 font-bold text-3xl">
        WatchList
      </Link>
    </nav>
  );
};

export default Navbar;
