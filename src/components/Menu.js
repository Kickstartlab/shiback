import React, { useState } from 'react'
import { Link } from "react-router-dom";



export default function Menu() {

  const [show, setShow] = useState(false);

  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-inter text-white-100 h-20">
        <a href="/" className="logo">
          <h2 class="uppercase text-2xl font-coolvetica font-semibold">AI DOGE</h2>
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-8 items-center">
            <li><a href="/" className="text-zinc-100">Home</a></li>
            <li><a href="/" className="hover:text-pink-100 cursor-pointer">Updates</a></li>
            <li><a href="/" className="hover:text-pink-100 cursor-pointer">Services</a></li>
            <li><a href="/" className="hover:text-pink-100 cursor-pointer">Features</a></li>
            <li><a href="/" className="hover:text-pink-100 cursor-pointer">About Us</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2">

            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2 12.5H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 2.5C14.5013 5.23835 15.9228 8.79203 16 12.5C15.9228 16.208 14.5013 19.7616 12 22.5C9.49872 19.7616 8.07725 16.208 8 12.5C8.07725 8.79203 9.49872 5.23835 12 2.5V2.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            EN
          </div>


          <button className="rounded-full font-inter font-semibold px-6 py-2 flex gap-3 items-center bg-pink-100">
            LogIn
          </button>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-inter">
        <a href="/" className="logo">
          <h2 class="uppercase text-2xl font-coolvetica font-semibold">AI DOGE</h2>
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-inter font-semibold bg-pink-100 z-20" style={{ left: "0" }}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <a href="/" className="logo">
              <h2 class="uppercase text-2xl font-coolvetica font-semibold">AI DOGE</h2>
            </a>
          </div>
        </div>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer hover:bg-zinc-700 text-white">
          <Link to="/" className="text-lg ml-4 text-gray-200 font-semibold">Home</Link>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <Link to="/" className="text-lg ml-4 text-gray-200 font-semibold">About</Link>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <Link to="/" className="text-lg ml-4 text-gray-200 font-semibold">Destination</Link>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <Link to="/" className="text-lg ml-4 text-gray-200 font-semibold">Service</Link>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <Link to="/" className="text-lg ml-4 text-gray-200 font-semibold">Blog</Link>
        </button>
      </div> : null
      }


    </header >
  )
}
