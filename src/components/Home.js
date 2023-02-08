import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
import p_4 from '../assets/p_4.png';
import video from '../assets/video.png';
import about from '../assets/about.png';
import about_1 from '../assets/about_1.png';
import chart from '../assets/chart.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import twitter from '../assets/twitter.png';
import top from '../assets/top.png';



export default function Home() {

    return (
        <div className="text-gray-100 font-montserat">

            {/* top section */}

            <div className="bg-seagreen-50">

                <div className="lg:px-8 px-5 container mx-auto">
                    <Menu />

                    <div className="py-8">

                        <div className="font-semibold">
                            Introducing <span className="text-blue-50"> SHIBACK</span>
                        </div>

                        <div className="lg:flex items-center justify-between">

                            <div className=" lg:w-1/2">
                                <h1 className="text-blue-100 md:text-6xl text-2xl leading-loose font-chucklesome font-bold">
                                    Gorem ipsum dolor
                                    sit amet, cons
                                </h1>

                                <div className="py-5">
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>

                                <div className="font-work flex items-center gap-5 mt-6">
                                    <a href="https://app.uniswap.org/">
                                        <button className="text-white-100 px-8 py-3 bg-blue-50 rounded-full font-semibold hover:bg-white-100 hover:text-blue-100">
                                            Get Started
                                        </button>
                                    </a>
                                    <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xa7214ef7b12eb7445a78fd5e31ed0dd7120f4dce">
                                        <button className="px-8 py-3 hover:bg-blue-50 bg-white-100 text-blue-100 hover:text-white-100 rounded-full font-semibold">
                                            Whitepaper
                                        </button>
                                    </a>

                                </div>
                            </div>

                            <div className="img md:mt-0 mt-12 lg:w-1/2">
                                <img src={top} alt="Logo" className='w-10/12 lg:float-right' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/*  What Is SHIBACK */}

            <div id='about' className="">

                <div className="lg:py-20 py-5 lg:px-8 px-5 container mx-auto">

                    <div className="text-center">
                        <h1 className="text-blue-100 md:text-6xl text-2xl leading-loose font-chucklesome font-bold">
                            What Is SHIBACK
                        </h1>
                    </div>

                    <div className="lg:flex items-center justify-between lg:py-16 py-6">
                        <div className="">
                            <h2 className='md:text-4xl text-2xl font-semibold text-blue-100'>
                                Norem ipsum dolor sit
                                consectetur
                            </h2>
                        </div>

                        <div>
                            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis  Norem ipsum dolor sit amet, consectetur</p>

                            <a href="/" className='text-blue-50 font-semibold pt-5 flex gap-4'>
                                Explore Ecosystem

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </a>
                        </div>

                    </div>

                    <div className="lg:flex items-center justify-between gap-6">

                        <div className="rounded-xl bg-yellow-50 p-6">
                            <img src={about} alt="" />
                        </div>

                        <div className="">
                            <img src={video} alt="" />
                            <img src={about_1} alt="" className='absolute ml-64 -mt-80' />
                        </div>
                    </div>
                </div>

            </div>


            {/* TOKENOMICS */}

            <div id='tokenomics' className="">

                <div className="lg:py-20 py-5 lg:px-8 px-5 container mx-auto">

                    <div className="text-center flex flex-col items-center justify-center">
                        <h3 className="text-blue-100 md:text-6xl text-2xl leading-loose font-chucklesome font-bold">
                            TOKENOMICS
                        </h3>

                        <p className='lg:py-12 py-6 lg:w-1/2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla.
                        </p>
                    </div>

                    <div className=''>
                        <img src={chart} alt="" className='flex mx-auto' />
                    </div>

                </div>

            </div>

            {/* roadmap */}

            <div id='roadmap' className="lg:py-12 py-5 lg:px-8 px-5 container mx-auto">

                <h3 className="text-center text-blue-100 md:text-6xl text-2xl leading-loose font-chucklesome font-bold">
                    ROADMAP
                </h3>

                <div className="lg:mt-12 mt-6 rounded-2xl bg-blue-200 p-8">

                </div>

            </div>

            {/* partners */}

            <div id='partners' className="">


                <div className="lg:py-20 py-5 lg:px-8 px-5 container mx-auto">

                    <h3 className="text-blue-100 md:text-6xl text-2xl text-center leading-loose font-chucklesome font-bold">
                        PARTNERS
                    </h3>

                    <div className="lg:mt-12 mt-6 flex items-center justify-center gap-6">
                        <div>
                            <img src={p_1} alt="" />
                        </div>
                        <div>
                            <img src={p_2} alt="" />
                        </div>
                        <div>
                            <img src={p_3} alt="" />
                        </div>
                        <div>
                            <img src={p_4} alt="" />
                        </div>
                    </div>

                </div>


            </div>

            {/* form section */}

            <div id='partners' className="">


                <div className="lg:py-20 py-5 lg:px-8 px-5 container mx-auto">

                    <h3 className="text-blue-100 md:text-5xl text-2xl text-center leading-loose font-semibold">
                        Don't miss out, Stay updated
                    </h3>

                    <div className="lg:mt-12 mt-6 flex items-center justify-center gap-6">
                        <a href='/'>
                            <img src={twitter} alt="" />
                        </a>
                        <a href='/'>
                            <img src={telegram} alt="" />
                        </a>
                        <a href='/'>
                            <img src={discord} alt="" />
                        </a>
                    </div>

                </div>


            </div>

            <Footer />

        </div >
    )
}
