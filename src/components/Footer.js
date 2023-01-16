import React from 'react'



export default function Footer() {
  return (
    <footer className='container text-white-100 mx-auto lg:px-20 px-5 py-8'>

      <div className="flex md:gap-6 gap-3 items-center justify-center font-inter">
        <a href="http://docs.aidogebsc.com/" className='md:text-xl text-medium hover:text-pink-100 font-semibold'>
          Docs
        </a>
        <a href="/" className='md:text-xl text-medium hover:text-pink-100 font-semibold'>
          Contract
        </a>
        <a href="https://t.me/AIDogeChat" className='md:text-xl text-medium hover:text-pink-100 font-semibold'>
          Telegram
        </a>
        <a href="https://twitter.com/AIDogeBsc" className='md:text-xl text-medium hover:text-pink-100 font-semibold'>
          Twitter
        </a>
      </div>

    </footer>
  )
}
