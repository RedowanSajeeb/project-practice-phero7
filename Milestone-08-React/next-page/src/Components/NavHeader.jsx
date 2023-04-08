import React from 'react';
import { BoltIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from 'react-router-dom';
const NavHeader = () => {
    return (
      <div>
        <div className="flex items-center justify-between">
          <Link to={"/"} className="flex items-center ">
            <BoltIcon className="h-6 w-6 text-blue-500" />
            <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800">
              nextPage
            </span>
          </Link>
          <div className='flex flex-row gap-6 font-semibold'>
            <NavLink>Home</NavLink>
            <NavLink>Books</NavLink>
            <NavLink to={'/About'}>About us</NavLink>
          </div>
        </div>
      </div>
    );
};

export default NavHeader;