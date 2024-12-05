import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const handleLogout = () => {
    setIsloggedin(false);
  };

  const handleLogin = () => {
    setIsloggedin(true);
  };

  const handleSignUp = () => {};

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex justify-between items-center shadow-xl rounded-lg">
      {/* Logo and Brand */}
      <div className="flex gap-2 items-center">
        <img
          src="https://shorthaired-buckaroo-d55.notion.site/icons/hexagon-one-sixth_purple.svg?mode=light"
          alt="logo"
          style={{ width: "35px", height: "35px", cursor: "pointer" }}
        />
        <span className="font-bold text-xl text-white tracking-wide">
          Habbits
        </span>
      </div>

      {/* Navigation & User Info */}
      {isloggedin ? (
        <div className="flex items-center gap-8">
          <a
            href="/dashboard"
            className="text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer"
          >
            Dashboard
          </a>
          <a
            href="/profile"
            className="text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer"
          >
            Profile
          </a>
          <span className="text-lg text-white">Hello, {user.name}!</span>
          <button
            onClick={handleLogout}
            className="ml-4 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 cursor-pointer"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
