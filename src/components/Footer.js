import React from 'react'
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';



export default function Footer() {
  return (
    <div className="text-blue-100 font-montserat">
      <footer className='container mx-auto lg:px-12 font-montserat px-5'>
        <div className="lg:flex items-baseline justify-between gap-12 py-8 space-y-6">
          <div className="col-span-1">

            <a href="/" className="lg:my-12">
              <h3 className="text-blue-100 md:text-4xl text-2xl leading-loose font-chucklesome font-bold">
                SHILBARIUM
              </h3>
            </a>

            <p className='py-5 lg:w-1/2'>
              Experience best moonshot of 2023 with us. Remember the Startegy Shill Buybacks & Burn.
            </p>


            <div className="flex pb-5">
              <a href="/">
                <img src={github} alt="Twitter" />
              </a>

              <a href="/">
                <img src={facebook} alt="Discord" />
              </a>

              <a href="/">
                <img src={insta} alt="Discord" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="font-bold text-xl text-blue-100 pb-5">
              Quick Links
            </h5>
            <ul>
              <a href="#tokenomics"><li className='pb-3 hover:text-blue-100'>Tokenomics</li></a>
              <a href="#roadmap"><li className='pb-3 hover:text-blue-100'>Roadmap</li></a>
              <a href="#"><li className='pb-3 hover:text-blue-100'>Whitepaper</li></a>
              <a href="#about"><li className='pb-3 hover:text-blue-100'>About us</li></a>
              <a href="#about"><li className='pb-3 hover:text-blue-100'>Telegram</li></a>

            </ul>
          </div>

          <div className="">
            <div className="sm:flex block items-center gap-x-6">

              <div className="">
                <div className="mb-3">
                  <label htmlFor="f-name" className="text-blue-100  text-xl font-semibold">
                    Your Name
                  </label>
                </div>
                <input type="text" placeholder="Type your name here" id="name" required="" className="p-3 border-2 border-seagreen-200 rounded-md bg-gray-100 ring-0" />
              </div>

              <div className="w-full sm:mt-0 mt-5">
                <div className="mb-3">
                  <label htmlFor="date" className="text-blue-100  text-xl font-semibold">
                    Your Email
                  </label>
                </div>
                <input type="email" placeholder="Type your email here" id="email" required="" className="p-3 border-2 border-seagreen-200 rounded-md bg-gray-100 ring-0" />
              </div>

            </div>

            <div className="mt-5">
              <div className="mb-3">
                <label htmlFor="message" className="text-blue-100 text-xl font-semibold">
                  Your Message
                </label>
              </div>
              <textarea rows='5' placeholder="Leave your question or comment here" id="message" required="" className="p-3 border-2 border-seagreen-200 rounded-md bg-gray-100 w-full" />
            </div>

            <button type='submit' className="rounded-md lg:w-64 bg-blue-100 text-white-100 font-semibold px-3 py-3 mt-6">
              SUBMIT YOUR MESSAGE
            </button>
          </div>
        </div>

        <div className="col-span-1">

          <p className='text-blue-100 font-semibold'>{new Date().getFullYear()} © SHILBARIUM. All rights reserved.</p>
        </div>

      </footer >
    </div >

  )
}
