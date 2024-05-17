import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className='bg-white text-black min-h-4 grid grid-flow-col md:pt-10 md:pb-0 py-5'>
        <div className='md:flex justify-center items-center hidden text-xl font-semibold'>
          <Link className='hover:bg-slate-200 p-3 rounded-lg' href='#menu'>
            Menu
          </Link>
        </div>
        <div className='md:flex justify-center items-center hidden text-xl font-semibold'>
          <button className='hover:bg-slate-200 p-3 rounded-lg'>Shop</button>
        </div>
        <div className='flex justify-center items-center text-2xl font-extrabold md:ml-9'>
          <Link href={"/"}>BREWISTA</Link>
        </div>
        <div className='md:flex justify-center items-center hidden text-xl font-semibold'>
          <button className='hover:bg-slate-200 p-3 rounded-lg'>Contact</button>
        </div>
        <div className='md:flex justify-center items-center hidden text-xl font-semibold'>
          <Link className='hover:bg-slate-200 p-3 rounded-lg' href='#about'>
            About
          </Link>
        </div>
      </div>
      <hr className='bg-neutral-800 h-0.5 ' />
    </div>
  );
};

export default Navbar;
