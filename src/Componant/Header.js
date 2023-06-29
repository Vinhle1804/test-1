import { Menu} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";



function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <nav className="border-gray-200 dark:bg-gray-900 flex bg-slate-100">
        <div className="flex items-center mx-auto p-4">
          <NavLink
            to="https://www.facebook.com/hi.all.people/"
            className="flex"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="text-2xl font-semibold dark:text-white">
              AddToCart
            </span>
          </NavLink>
          <div className="ml-6">
            <div className=" md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex">
                <li>
                  <NavLink
                    href="#ok"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  >
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            className=""
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            CART
          </button>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
     <div className="h-96 w-80 flex justify-between">
       <p>your cart is ở đay</p>
       <i onClick={handleClose}>X</i>
    </div>
       
      </Menu>
        </div>
      </nav>
    </div>
  );
}
export default Header;
