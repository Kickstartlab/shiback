import React, { useState } from 'react'
import logo from '../assets/logo.png';




export default function Menu() {

  const [show, setShow] = useState(false);

  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-montserat h-20">
        <a href="/">
          <img src={logo} alt="" />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-8 items-center">
            <li><a href="#roadmap" className="text-blue-100 font-semibold">Ecosystem</a></li>
            <li><a href="#tokenomics" className="text-blue-100 font-semibold">Buy</a></li>
            <li><a href="#tokenomics" className="text-blue-100 font-semibold">Tokenomics</a></li>
            <li><a href="#roadmap" className="text-blue-100 font-semibold">Roadmap</a></li>
            <li><a href="#partners" className="text-blue-100 font-semibold">Community</a></li>
          </ul>
        </nav>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-nutino-sans">
        <a href="/" className="logo w-1/2">
          <img src={logo} alt="" />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto transition-all duration-300 text-center font-work font-semibold bg-yellow-50 z-20" style={{ left: "0" }}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <a href="/" className="logo">
              <a href="/" className="logo w-1/2">
                <img src={logo} alt="" />
              </a>
            </a>
          </div>
        </div>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer text-blue-100">
          <a href="/" className="text-lg ml-4 font-semibold">Ecosystem</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer text-blue-100">
          <a href="/" className="text-lg ml-4">Buy</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer text-blue-100">
          <a href="#tokenomics" className="text-lg ml-4 font-semibold">Tokenomics</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer text-blue-100">
          <a href="#roadmap" className="text-lg ml-4 font-semibold">Roadmap</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer text-blue-100">
          <a href="#partners" className="text-lg ml-4 font-semibold">Community</a>
        </button>
      </div> : null
      }


    </header >
  )
}
