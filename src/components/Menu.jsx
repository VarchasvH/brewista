import React from "react";

const Menu = () => {
  return (
    <div className='min-h-screen bg-white text-black'>
      <hr className='bg-neutral-800 h-0.5 ' />
      <text className='text-lg flex justify-center items-center md:text-3xl md:pr-[710px] md:pl-36 font-semibold md:pt-24 pl-12 pr-20 pt-10 text-pretty '>
        Well curated menu of fresh, high-quality beverages and food.
      </text>
      <div className='flex pl-16 pt-10 text-xs md:text-sm md:flex justify-start items-center space-x-5 md:space-x-20 md:pl-36 md:pt-10'>
        <div className='hover:font-bold cursor-pointer'>All Menu</div>
        <div className='hover:font-bold cursor-pointer'>Food</div>
        <div className='hover:font-bold cursor-pointer'>Beverages</div>
        <div className='hover:font-bold cursor-pointer'>Non-Coffee</div>
        <div className='pl-[700px] hidden md:flex'></div>
      </div>
    </div>
  );
};

export default Menu;
