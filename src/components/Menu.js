import React, { useEffect, useState } from "react";
import doge from '../assets/doge.png'


export default function Menu() {

  const [show, setShow] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const [nextScrollPos, setNextScrollPos] = useState(0);
  const [notVisible, setNotVisible] = useState(true)

  const handleVisible = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > nextScrollPos) {
      setNotVisible(false)
    } else {
      setNotVisible(true)
    }

    setNextScrollPos(currentScrollPos)
  }

  useEffect(() => {

    window.addEventListener('scroll', handleVisible);
    return () => window.addEventListener('scroll', handleVisible)
  })

  return (

    <header>

      <div className="lg:flex hidden items-center justify-between font-inter text-white-100 h-20">
        <a href="/" className="logo">
          <h2 class="uppercase text-2xl font-coolvetica font-semibold">AI DOGE</h2>
        </a>

        <div className="flex items-center gap-3">
          <a href="#about" className="">Menu</a>

          <button onClick={() => setShow(!show)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
          </button>
        </div>

      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 right-0 p-2 overflow-y-auto text-center font-inter font-semibold bg-pink-100 z-20" style={{ left: "0" }}>

        <div className="">
          <div className="p-2.5 mt-1 flex items-center">
            <a href="/" className="logo">
              <h2 class="uppercase text-2xl font-coolvetica font-semibold">AI DOGE</h2>
            </a>
          </div>

          <button onClick={() => setShow(!show)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
          </button>
        </div>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer hover:bg-zinc-700 text-white">
          <a href="/" className="text-zinc-100">Home</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <a href="#about" className="hover:text-pink-100 cursor-pointer">About</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <a href="#tokenomics" className="hover:text-pink-100 cursor-pointer">Tokenomics</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <a href="#roadmap" className="hover:text-pink-100 cursor-pointer">Roadmap</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <a href="#contact" className="hover:text-pink-100 cursor-pointer">Contract</a>
        </button>
      </div> : null
      }






      <div className={`lg:hidden flex items-center justify-between pt-5 px-5 sticky ${visible ? 'block' : 'hidden'}`}>
        <a href="/" className="logo">
          <h2 class="uppercase text-2xl font-coolvetica font-semibold">AI DOGE</h2>
        </a>

        <button>
          <img src={doge} alt="" className="w-24" />
        </button>
      </div>

      <div className={`lg:hidden flex items-center justify-between fixed w-full top-0 px-5 bg-blue-50 py-3 ${notVisible ? 'hidden' : 'block'}`}>
        <a href="/" className="logo">
          <h2 class="uppercase text-2xl font-coolvetica font-semibold">AI DOGE</h2>
        </a>

        <button onClick={() => setShow(!show)}>
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
          <a href="/" className="text-lg ml-4 text-gray-200 font-semibold">Home</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <a href="#updates" className="text-lg ml-4 text-gray-200 font-semibold">Updates</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <a href="#services" className="text-lg ml-4 text-gray-200 font-semibold">Services</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <a href="#features" className="text-lg ml-4 text-gray-200 font-semibold">Features</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <a href="#about" className="text-lg ml-4 text-gray-200 font-semibold">About Us</a>
        </button>
      </div> : null
      }


    </header >
  )
}
