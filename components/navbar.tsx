"use client"
import React, { useState } from 'react';
import Link from 'next/link';

/*const Navbar = () => {
  return (
    <nav className='bg-white flex flex-col justify-center items-center p-3 rounded-3xl mt-4 drop-shadow-md'>
      <div className="border border-black rounded-xl opacity-30">
        <a className='text-black font-bold text-base'>NOBLE NEST</a>
        <div className="flex flex-col w-[40px] h-[100px] bg-gray-500 border border-black rounded-3xl opacity-30 justify-center">
          <ul className='flex flex-row justify-center text-black font-normal text-base gap-7'>
            <li><Link href='#'>About us</Link></li>
            <li><Link href='#'>Properties</Link></li>
            <li><Link href='#'>Agents</Link></li>
            <li><Link href='#'>Services</Link></li>
            <li><Link href='#'>Insights & Research</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;*/


const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <nav className='bg-white flex flex-row justify-between rounded-3xl mt-4'>
      <Link href="#">
        <span className='text-black font-bold text-base'>NOBLE NEST</span>
      </Link>
      <div className='flex flex-row gap-5 justify-center items-center'>
        {/* Search bar section */}
        <div className={`flex items-center justify-center w-32 h-10 border border-black rounded-3xl ${isSearchActive ? 'border-primary' : ''}`}>
          {isSearchActive && (
            <input type="text" placeholder="Search..." className="bg-white p-2 pl-8 text-sm rounded-3xl border-none outline-none focus:ring-primary focus:ring-opacity-50" />
          )}
          <svg
            className='w-6 h-6 cursor-pointer text-black'
            onClick={handleSearchClick}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.21001 10.7899C13.9599 15.5399 19.8599 15.5399 24.6099 10.7899L19.0099 5.18989C17.8099 6.38989 16.1099 7.08989 14.2099 7.08989C12.3099 7.08989 10.6099 6.38989 9.40991 5.18989L4.80991 10.7899C0.95991 15.5399 6.85991 15.5399 11.6099 10.7899Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Navigation links */}
        <div className='border border-black rounded-3xl p-2'>
          <ul className='flex flex-row gap-5 m-0 p-0'>
            <li className='p-1'><Link href='#'>About us</Link></li>
            <li className='p-1'><Link href='#'>Properties</Link></li>
            <li className='p-1'><Link href='#'>Agents</Link></li>
            <li className='p-1'><Link href='#'>Services</Link></li>
            <li className='p-1'><Link href='#'>Insights & Research</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



