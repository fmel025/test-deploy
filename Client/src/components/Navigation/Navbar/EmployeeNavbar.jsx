import { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeNavbar = () => {
  let Links = [
    { name: "Events", link: "/manageevents" },
    { name: "Statistics", link: "/eventstatisticsselection" },
    { name: "Authorizations", link: "/manageauthorizations" },
    { name: "Manage users", link: "/manageusers" },
    { name: "Profile", link: "/profile" },
    { name: "Logout", link: "/login" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>

      <nav className='shadow-md bg-white w-full fixed top-0 left-0 mb-10'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <Link to='/home' className='font-bold text-2xl cursor-pointer flex items-center font-[Aleo] 
      text-[#605DEC]'>
            EventMate
          </Link>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
            {
              Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-lg md:my-0 my-2 font-bold md:font-normal'>
                  <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>

    </>
  );
};

export default EmployeeNavbar;
