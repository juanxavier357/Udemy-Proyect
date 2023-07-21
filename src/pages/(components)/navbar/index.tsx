import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faGear,
  faCircleCheck,
  faAngleLeft,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavBar: React.FC = (props) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faCircleCheck}
            size="2x"
            className="text-white"
          />
          <h1 className="text-3xl font-bold text-white">UDEMY</h1>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-white text-xl font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
      <div
        className={`md:hidden fixed top-0 right-0 w-2/3 h-screen bg-white transform ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out`}
      >
        <div className="flex flex-col h-full py-6">
          <button onClick={toggleSidebar} className="ml-auto mr-4 mb-4">
            <FontAwesomeIcon icon={faAngleLeft} rotation={180} size="lg" />
          </button>
          <Link
            href="/"
            className="text-gray-800 py-2 px-4 text-xl font-semibold"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-gray-800 py-2 px-4 text-xl font-semibold"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="text-gray-800 py-2 px-4 text-xl font-semibold"
          >
            About
          </Link>
          <Link
            href="/register"
            className="text-gray-800 py-2 px-4 text-xl font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
