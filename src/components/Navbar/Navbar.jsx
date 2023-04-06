import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import LoginModal from '../LoginModal/LoginModal';

const Navbar = () => {
  const MENU_LIST = {
    Home: '/',
    Member: '/member',
    Activity: '/activity',
  };

  // logout
  const logoutHandler = () => {
    axios.post('http://localhost:8080/logout').then((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <div className="navbar bg-neutral text-neutral-content sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52"
            >
              {Object.entries(MENU_LIST).map((el, idx) => {
                let [menu, address] = el;
                return (
                  <li key={idx}>
                    <Link to={address}>{menu}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"># Include</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Object.entries(MENU_LIST).map((el, idx) => {
              let [menu, address] = el;
              return (
                <li key={idx}>
                  <Link to={address}>{menu}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <label htmlFor='login-modal' className="btn">Login</label>
          <label className='btn' onClick={logoutHandler}>Logout</label>
        </div>
      </div>

      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <LoginModal />
    </>
  );
};

export default Navbar;
