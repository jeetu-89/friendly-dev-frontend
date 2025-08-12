import { NavLink } from "react-router";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  //   Sates
  const [menuOpen, setMenuOpen] = useState(false);
  const base = "transition hover:text-blue-400";
  const active = "text-blue-400 font-bold";
  return (
    <nav className="bg-gray-800">
      <div className=" max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="flex  justify-between items-center gap-2 font-bold text-lg text-blue-300 hover:opacity-50"
        >
          <FaLaptopCode className="text-blue-400 text-2xl" />
          <span>The Friendly Developer</span>
        </NavLink>

        {/* Desktop Nav   */}
        <div className="hidden md:flex items-center ">
          <div className="text-sm text-gray-300 space-x-4">
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu  */}
        <div className="flex md:hidden">
          <button
            className="text-xl text-blue-400 cursor-pointer hover:opacity-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-700 px-6 py-3 text-center space-x-4 text-sm">
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/"
            onClick={()=>setMenuOpen(!menuOpen)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/projects"
            onClick={()=>setMenuOpen(!menuOpen)}
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/blog"
            onClick={()=>setMenuOpen(!menuOpen)}
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/about"
            onClick={()=>setMenuOpen(!menuOpen)}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/contact"
            onClick={()=>setMenuOpen(!menuOpen)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
