import React from 'react';
import icon from '../../assets/logo.png';
import { Link } from 'react-router';


const Navbar = () => {
    return (
       <div className='navbar shadow sticky top-0 z-50 bg-purple-100'>
        <div className="px-5 lg:px-12 flex items-center justify-between border-purple-100 border-1 container mx-auto">
            {/* Left Section */}
            <div className="navbar-start flex items-center gap-3 w-auto">
              
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                  </svg>
                </div>
    
                {/* Dropdown Menu*/}
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 p-2 shadow font-semibold">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/apps">Apps</Link></li>
                  <li><Link to="/install">Installation</Link></li>
                </ul>
              </div>
    
              {/* Logo */}
              <Link to='/'>
              <div className="flex items-center gap-2 ml-2">
                <img className="h-10" src={icon} alt="logo" />
                <h1 className="text-xl text-[#9F62F2] font-bold">HERO.IO</h1>
              </div>
              </Link>
            </div>
    
            {/* Center Links */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-semibold gap-3">
                <li><Link href="/home" className="hover:text-[#9F62F2] transition">Home</Link></li>
                <li><Link to="/apps" className="hover:text-[#9F62F2] transition">Apps</Link></li>
                <li><Link to="/install" className="hover:text-[#9F62F2] transition">Installation</Link></li>
              </ul>
            </div>
    
            {/* Right Section (Contribution Button) */}
            <div>
              <a href="https://github.com/shehabRabby" target="_blank" className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300">
                 <i className="fa-brands fa-github text-lg"></i>
                 <span className="hidden sm:inline">Contribution</span>
              </a>
            </div>
       </div>
       </div>
    );
};

export default Navbar;