import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
 const [open,setOpen] =   useState(false);
    const routes = [
      {
        id: 1,
        name: "Home",
        path: "/",
      },
      {
        id: 2,
        name: "About",
        path: "/about",
      },
      {
        id: 3,
        name: "Contact",
        path: "/contact",
      },
      {
        id: 4,
        name: "Products",
        path: "/products",
      },
      {
        id: 5,
        name: "Services",
        path: "/services",
      },
    ];
    return (
      <nav>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-blue-500 mt-5" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-500 mt-5" />
            )}
          </span>
        </div>

        <ul className={`md:flex gap-5 absolute md:static mt-2  duration-500 p-2 border-red-50 rounded  bg-red-300 ${open ? 'top-20' : '-top-96'}`}>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    );
};

export default Navbar;