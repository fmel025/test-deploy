import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const EmployeeNavbar = () => {
  const { isLoggedIn, permissions, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  let [open, setOpen] = useState(false);
  return (
    <>
      <nav className="shadow-md bg-white w-full fixed top-0 left-0 mb-10 z-50">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <Link
            to="/private/home "
            className="font-bold text-2xl cursor-pointer flex items-center font-[Aleo] 
      text-[#605DEC]"
          >
            EventMate
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {(permissions.includes("ADMIN") ||
              permissions.includes("EVENT_MOD")) && (
              <li className="md:ml-8 text-lg md:my-0 my-2 font-bold md:font-normal">
                <Link
                  to="/event/manage"
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  Events
                </Link>
              </li>
            )}
            {(permissions.includes("ADMIN") ||
              permissions.includes("ANALYST")) && (
              <li className="md:ml-8 text-lg md:my-0 my-2 font-bold md:font-normal">
                <Link
                  to="/event/statistics"
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  Statistics
                </Link>
              </li>
            )}

            {(permissions.includes("ADMIN") ||
              permissions.includes("VALIDATOR")) && (
              <li className="md:ml-8 text-lg md:my-0 my-2 font-bold md:font-normal">
                <Link
                  to="/scanner"
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  Scanner
                </Link>
              </li>
            )}

            {(permissions.includes("ADMIN") || permissions.includes("MOD")) && (
              <li className="md:ml-8 text-lg md:my-0 my-2 font-bold md:font-normal">
                <Link
                  to="/manage/users"
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  Manage users
                </Link>
              </li>
            )}

            {permissions.includes("ADMIN") && (
              <li className="md:ml-8 text-lg md:my-0 my-2 font-bold md:font-normal">
                <Link
                  to="/manage/auth"
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  Admin panel
                </Link>
              </li>
            )}

            {isLoggedIn() && (
              <li className="md:ml-8 text-lg md:my-0 my-2 font-bold md:font-normal">
                <Link
                  to="/user/profile"
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  Profile
                </Link>
              </li>
            )}

            {isLoggedIn() && (
              <li
                key="Logout"
                className="md:ml-8 text-lg md:my-0 my-2 font-bold md:font-normal"
              >
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default EmployeeNavbar;
