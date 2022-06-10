import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/skills'>Skills</Link></li>
    <li><Link to='/projects'>projects</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><a href='https://drive.google.com/file/d/1Kv2ZRquImDNwwGn8J90NSNnLkfSwcqs2/view'>Resume</a></li>
    </>
    return (<div class="navbar bg-accent">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52 text-white">
          {menuItems}
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-3xl text-primary">MK</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0 text-white">
        {menuItems}
      </ul>
    </div>
  </div>
      );
    
};

export default Navbar;