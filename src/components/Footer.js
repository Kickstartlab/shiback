import React from 'react'
import github from '../assets/github.png';
import discord_1 from '../assets/discord_1.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';



export default function Footer() {
  return (
    <div className="text-blue-100 font-montserat">
      <footer className='container mx-auto lg:px-12 font-montserat px-5'>
        <div className="grid grid-cols-1 text-gray-100 lg:grid-cols-5 md:grid-cols-3 items-baseline place-items-start gap-12 py-8">
          <div className="md:col-span-2 col-span-1">

            <a href="/" className="lg:my-12">
              <h3 className="text-blue-100 md:text-4xl text-2xl leading-loose font-chucklesome font-bold">
                SHIBARIUM
              </h3>
            </a>

            <p className='py-5'>
              Lorem Ipsum dollar here
            </p>

            <div className="flex pb-5">
              <a href="/">
                <img src={github} alt="Twitter" />
              </a>

              <a href="/">
                <img src={discord_1} alt="Telegram" />
              </a>

              <a href="/">
                <img src={facebook} alt="Discord" />
              </a>

              <a href="/">
                <img src={insta} alt="Discord" />
              </a>
            </div>
            <p className='text-blue-100 font-semibold'>{new Date().getFullYear()} © SHIBARIUM. All rights reserved.</p>
          </div>

          <div className="col-span-1">
            <h5 className="font-bold text-xl text-blue-100 pb-5">
              Pages
            </h5>
            <ul>
              <a href="#tokenomics"><li className='pb-3 hover:text-blue-100'>Tokenomics</li></a>
              <a href="#roadmap"><li className='pb-3 hover:text-blue-100'>Roadmap</li></a>
              <a href="#"><li className='pb-3 hover:text-blue-100'>Whitepaper</li></a>
              <a href="#about"><li className='pb-3 hover:text-blue-100'>About us</li></a>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="font-bold text-xl text-blue-100 pb-5">
              Support
            </h5>
            <ul>
              <a href="#nft"><li className='pb-3 hover:text-blue-100'>Custommer Service</li></a>
              <a href="#roadmap"><li className='pb-3 hover:text-blue-100'>FAQ</li></a>
              <a href="#chain"><li className='pb-3 hover:text-blue-100'>Community</li></a>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="text-blue-100 text-xl pb-5 font-bold">
            About 
            </h5>
            <ul>
              <a href="#about"><li className='pb-3 hover:text-blue-100'>About us</li></a>
              <a href="#roadmap"><li className='pb-3 hover:text-blue-100'>Privacy policy</li></a>
              <a href="#chain"><li className='pb-3 hover:text-blue-100'>Term of use</li></a>
              <a href="#chain"><li className='pb-3 hover:text-blue-100'>Quick start guide</li></a>
              <a href="#chain"><li className='pb-3 hover:text-blue-100'>Language support</li></a>
              <a href="#chain"><li className='pb-3 hover:text-blue-100'>Cookie policy</li></a>
            </ul>
          </div>
        </div>
      </footer>
    </div>

  )
}
