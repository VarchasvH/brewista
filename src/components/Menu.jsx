"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getHotData = async () => {
      try {
        const res = await axios.get("https://api.sampleapis.com/coffee/hot");
        setMenuItems(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getHotData();
  }, []);

  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden'>
      <hr className='bg-neutral-800 h-0.5' />
      <text className='text-lg flex justify-center items-center md:text-3xl md:pr-[710px] md:pl-36 font-semibold md:pt-24 pl-12 pr-20 pt-10 text-pretty'>
        Well curated menu of fresh, high-quality coffee.
      </text>
      <text className='text-3xl flex justify-center items-center md:text-5xl md:pr-[1050px] md:pl-0 font-semibold md:pt-24 md:pb-10 pl-10 pr-52 pt-10 pb-5 text-pretty'>
        Hot Drinks
      </text>
      <div className='flex flex-wrap justify-center'>
        <div className='flex flex-col md:flex-row md:space-x-10  overflow-x-hidden'>
          {menuItems?.slice(0, 4).map((menuItem) => (
            <div
              className='hover:bg-slate-100 md:h-[500px] md:w-[300px] md:p-5 px-5 pt-5 m-2 rounded-lg md:mb-20'
              key={menuItem.id}
            >
              <a href='#' className='block'>
                <img
                  alt={menuItem.title}
                  src={menuItem.image}
                  className='md:h-70 h-30 w-56 md:w-full object-cover rounded-lg'
                />
                <h3 className='mt-4 text-lg font-bold text-gray-900 md:text-xl  flex justify-center items-center pb-2'>
                  {menuItem.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
        <text className='text-3xl flex justify-center items-center md:text-5xl md:pr-[1050px] md:pl-0 font-semibold md:pt-0 md:pb-10 pl-10 pr-48 pt-10 pb-5 text-pretty'>
          Cold Drinks
        </text>
        <div className='flex flex-col md:flex-row md:space-x-10  overflow-x-hidden justify-center items-center'>
          <div className='hover:bg-slate-100 md:h-[500px] md:w-[300px] md:p-5 px-5 pt-5 m-2 rounded-lg md:mb-40'>
            <a href='#' className='block'>
              <img
                alt='{coldItem.title}'
                src='https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='md:h-70 h-30 w-56 md:w-full object-cover rounded-lg'
              />
              <h3 className='mt-4 text-lg font-bold text-gray-900 sm:text-xl flex justify-center items-center pb-5 '>
                Iced Coffee
              </h3>
            </a>
          </div>
          <div className='hover:bg-slate-100 md:h-[500px] md:w-[300px] md:p-5 px-5 pt-5 m-2 rounded-lg md:mb-40'>
            <a href='#' className='block'>
              <img
                alt='{coldItem.title}'
                src='https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='md:h-70 h-30 w-56 md:w-full object-cover rounded-lg'
              />
              <h3 className='mt-4 text-lg font-bold text-gray-900 sm:text-xl flex justify-center items-center pb-5'>
                Frappuccino
              </h3>
            </a>
          </div>
          <div className='hover:bg-slate-100 md:h-[500px] md:w-[300px] md:p-5 px-5 pt-5 m-2 rounded-lg md:mb-40'>
            <a href='#' className='block'>
              <img
                alt='{coldItem.title}'
                src='https://images.unsplash.com/photo-1644764399224-f7d18b1e8d1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='md:h-70 h-30 w-56 md:w-full object-cover rounded-lg'
              />
              <h3 className='mt-4 text-lg font-bold text-gray-900 sm:text-xl flex justify-center items-center pb-5'>
                Nitro
              </h3>
            </a>
          </div>
          <div className='hover:bg-slate-100 md:h-[500px] md:w-[300px] md:p-5 px-5 pt-5 m-2 rounded-lg md:mb-40'>
            <a href='#' className='block'>
              <img
                alt='{coldItem.title}'
                src='https://images.unsplash.com/photo-1632277667574-aab239fb8464?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='md:h-70 h-30 w-56 md:w-full object-cover rounded-lg'
              />
              <h3 className='mt-4 text-lg font-bold text-gray-900 sm:text-xl flex justify-center items-center pb-5'>
                Frappe
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
