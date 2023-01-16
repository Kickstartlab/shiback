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

      {show ? <div className="sidebar duration-300 fixed top-0 bottom-0 lg:w-1/2 w-3/4 right-0 px-8 py-5 overflow-y-auto text-center font-inter font-semibold bg-blue-50 z-20">

        <div className="pb-8">
          <div className="mt-1 flex items-center justify-between">
            <a href="/" className="logo">
              <h2 class="uppercase text-2xl font-coolvetica font-semibold">AI DOGE</h2>
            </a>

            <button onClick={() => setShow(!show)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </button>
          </div>
        </div>
        <button onClick={() => setShow(!show)} className="p-2.5 w-full hover:bg-white-100 mt-5 flex items-center rounded-md duration-300 lg:text-xl font-inter md:text-lg hover:text-pink-100">
          <a href="/">Home</a>
        </button>
        <button onClick={() => setShow(!show)} className="p-2.5 w-full hover:bg-white-100 mt-5 flex items-center rounded-md duration-300 lg:text-xl font-inter md:text-lg hover:text-pink-100">
          <a href="#about">About</a>
        </button>
        <button onClick={() => setShow(!show)} className="p-2.5 w-full hover:bg-white-100 mt-5 flex items-center rounded-md duration-300 lg:text-xl font-inter md:text-lg hover:text-pink-100">
          <a href="#tokenomics">Tokenomics</a>
        </button>
        <button onClick={() => setShow(!show)} className="p-2.5 w-full hover:bg-white-100 mt-5 flex items-center rounded-md duration-300 lg:text-xl font-inter md:text-lg hover:text-pink-100">
          <a href="#roadmap">Roadmap</a>
        </button>
        <button onClick={() => setShow(!show)} className="p-2.5 w-full hover:bg-white-100 mt-5 flex items-center rounded-md duration-300 lg:text-xl font-inter md:text-lg hover:text-pink-100">
          <a href="#contact">Contract</a>
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

      <div className={`lg:hidden flex items-center justify-between fixed w-full z-20 top-0 px-5 bg-blue-50 py-3 ${notVisible ? 'hidden' : 'block'}`}>
        <a href="/" className="logo">
          <h2 class="uppercase text-2xl font-coolvetica font-semibold">AI DOGE</h2>
        </a>

        <button onClick={() => setShow(!show)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>


    </header >
  )
}
