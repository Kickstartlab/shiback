import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
import p_4 from '../assets/p_4.png';
import video from '../assets/video.png';
import about from '../assets/about.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';
import top from '../assets/top.png';
import Aos from 'aos';
import 'aos/dist/aos.css';



export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
            delay: 50,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="text-gray-100 font-montserat">

            {/* top section */}

            <div className="bg-seagreen-50">

                <div className="lg:px-8 px-5 container mx-auto">
                    <Menu />

                    <div className="py-8">

                        <div className="lg:flex items-center justify-between">

                            <div className=" lg:w-1/2">

                                <div className="font-semibold">
                                    Introducing <span className="text-blue-50 uppercase pb-3"> Shilbarium</span>
                                </div>
                                <h1 className="text-blue-100 md:text-6xl text-2xl leading-loose font-chucklesome font-bold">
                                    SHILL      BUYBACKS       BURN
                                </h1>

                                <div className="py-5">
                                    Shilbarium is a Memecoin with a strong community where Shilling wins Buy Back & Burns 🔥.  Those who work together, Win together.🏆
                                </div>

                                <div className="font-work flex items-center gap-5 mt-6">
                                    <a href="https://t.me/ShilbariumPortal">
                                        <button className="text-white-100 lg:px-8 px-5 py-3 bg-blue-50 rounded-full font-semibold hover:bg-white-100 hover:text-blue-100">
                                            Join Us
                                        </button>
                                    </a>
                                    <a href="https://www.dextools.io/app/en/arbitrum/pair-explorer/0x08d23654228dddda873c1521571229f2a6ae56a3">
                                        <button className="lg:px-8 px-5 py-3 hover:bg-blue-50 bg-white-100 text-blue-100 hover:text-white-100 rounded-full font-semibold">
                                            Chart
                                        </button>
                                    </a>

                                </div>
                            </div>

                            <div className="img md:mt-0 mt-12 lg:w-1/2 box">
                                <img src={top} alt="Logo" className='lg:float-right' />

                                <div className="pt-6 lg:float-right">

                                    <svg width="438" height="110" viewBox="0 0 438 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_f_29_11)">
                                            <ellipse cx="219" cy="55" rx="180" ry="16" fill="#979797" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_29_11" x="0" y="0" width="438" height="110" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="19.5" result="effect1_foregroundBlur_29_11" />
                                            </filter>
                                        </defs>
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/*  What Is Shilbarium */}

            <div id='about' className="">

                <div className="lg:py-20 py-5 lg:px-8 px-5 container mx-auto">

                    <div className="text-center">
                        <h1 className="text-blue-100 md:text-6xl text-2xl leading-loose font-chucklesome font-bold">
                            What Is Shilbarium
                        </h1>
                    </div>

                    <div className="lg:flex items-center justify-between lg:py-16 py-6">
                        <div className="lg:w-8/12">
                            <h2 className='md:text-4xl text-2xl font-semibold text-blue-100'>
                                About Us
                            </h2>
                        </div>

                        <div>
                            <p>Shilbarium is a community-owned Arbitrum token that is deflationary by design.  Our community works together and complete the number of shills required and are rewarded with a buy back and burn 🔥. The result is a reduced supply which  constantly raises our floor price and marketcap</p>

                            <a href="https://www.sushi.com/swap" className='text-blue-50 font-semibold pt-5 flex gap-4'>
                                Buy Now

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </a>
                        </div>

                    </div>

                    <div className="lg:flex items-baseline justify-between gap-6 space-y-6">

                        <div className="rounded-xl bg-yellow-50 p-6">
                            <img src={about} alt="" />
                        </div>

                        <div className="">
                            <img src={video} alt="" className="" />
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

                        <h3 className="text-blue-100 md:text-6xl text-2xl leading-loose font-chucklesome font-bold lg:py-16 py-6">
                            COMMUNITY POWER
                        </h3>
                    </div>

                    {/* <div className=''>
                        <div className="flex items-center gap-5 absolute ml-56 mt-12">

                            <div className="space-y-5 float-right">
                                <p className="text-blue-100">
                                    10%
                                </p>

                                <p className="text-blue-100">
                                    Presale Token
                                </p>
                            </div>

                            <div>
                                <img src={line_1} alt="" />
                            </div>

                        </div>
                        <div className="flex items-center gap-5 absolute mr-64 mt-12 right-0">

                            <div>
                                <img src={line_2} alt="" />
                            </div>
                            <div className="space-y-5">
                                <p className="text-blue-100">
                                    30%
                                </p>

                                <p className="text-blue-100">
                                    Sale Token
                                </p>
                            </div>

                        </div>
                        <img src={chart} alt="" className='flex mx-auto' />
                        <div className="flex items-center gap-5 absolute ml-56 -mt-12">

                            <div className="space-y-5 float-right">
                                <p className="text-blue-100">
                                    20%
                                </p>

                                <p className="text-blue-100">
                                    Team & Advisor
                                </p>
                            </div>

                            <div>
                                <img src={line_3} alt="" />
                            </div>

                        </div>
                        <div className="flex items-center gap-5 absolute mr-64 -mt-12 right-0">

                            <div>
                                <img src={line_4} alt="" />
                            </div>
                            <div className="space-y-5">
                                <p className="text-blue-100">
                                    25%
                                </p>

                                <p className="text-blue-100">
                                    Reserve Fund
                                </p>
                            </div>

                        </div>
                    </div> */}

                </div>

            </div>

            {/* roadmap */}

            <div id='roadmap' className="lg:py-12 py-5 lg:px-8 px-5 container mx-auto">

                <h3 className="text-center text-blue-100 md:text-6xl text-2xl leading-loose font-chucklesome font-bold">
                    ROADMAP
                </h3>

                <div className="lg:mt-12 mt-6 rounded-2xl bg-blue-200 lg:p-12 p-6">
                    <div className="border-b-2 border-yellow-100">
                    </div>

                    <div className='lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6'>


                        <div className='flex flex-col items-center'>
                            <div data-aos="zoom-in" className='absolute -mt-3.5 lg:block hidden'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="14.1642" cy="13.861" r="13.7717" fill="#D3D648" className='animate-pulse' />
                                    <circle cx="14.1649" cy="13.8607" r="8.263" fill="#D3D648" />
                                </svg>

                            </div>

                            <div className="border-l border-white-100 lg:mt-5 mt-0 mb-3 h-14">

                            </div>

                            <div data-aos="flip-right" className="border border-yellow-100 rounded-2xl text-white-100 p-5 lg:w-56">

                                <h5 className="text-2xl py-4 font-semibold">
                                    PHASE 1
                                </h5>

                                <ul className="space-y-4">
                                    <li>
                                        ♦️ CONTRACT, LOGO CREATION
                                    </li>
                                    <li>
                                        ♦️ WEBSITE RELEASE V1
                                    </li>
                                    <li>
                                        ♦️ STEALTH LAUNCH ON ARBITRUM
                                    </li>
                                    <li>
                                        ♦️ REACH 200K MC - 500 HOLDERS
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div data-aos="zoom-in" className='absolute -mt-3.5 lg:block hidden'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="14.1642" cy="13.861" r="13.7717" fill="#D3D648" className='animate-pulse' />
                                    <circle cx="14.1649" cy="13.8607" r="8.263" fill="#D3D648" />
                                </svg>

                            </div>

                            <div className="border-l border-white-100 lg:mt-5 mt-0 mb-3 h-14">

                            </div>

                            <div data-aos="flip-left" className="border border-yellow-100 rounded-2xl text-white-100 p-5 lg:w-56">

                                <h5 className="text-2xl py-4 font-semibold">
                                    PHASE 2
                                </h5>

                                <ul className="space-y-4">
                                    <li>
                                        ♦️ WHITEPAPER RELEASE
                                    </li>
                                    <li>
                                        ♦️ AUDIT & KYC FROM A REPUTABLE COMPANY
                                    </li>
                                    <li>
                                        ♦️ PRESS RELEASES & PARTNERSHIPS
                                    </li>
                                    <li>
                                        ♦️ REACH 1M MC & 1K HOLDERS
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div data-aos="zoom-in" className='absolute -mt-3.5 lg:block hidden'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="14.1642" cy="13.861" r="13.7717" fill="#D3D648" className='animate-pulse' />
                                    <circle cx="14.1649" cy="13.8607" r="8.263" fill="#D3D648" />
                                </svg>

                            </div>

                            <div className="border-l border-white-100 lg:mt-5 mt-0 mb-3 h-14">

                            </div>

                            <div data-aos="flip-left" className="border border-yellow-100 rounded-2xl text-white-100 p-5 lg:w-56">

                                <h5 className="text-2xl py-4 font-semibold">
                                    PHASE 3
                                </h5>

                                <ul className="space-y-4">
                                    <li>
                                        ♦️ BRIDGE TO ETH NETWORK
                                    </li>
                                    <li>
                                        ♦️ P2E GAME BETA DEVELOPMENT
                                    </li>
                                    <li>
                                        ♦️ CMC & CG LISTING
                                    </li>
                                    <li>
                                        ♦️ REACH 5M MC & 2K HOLDERS
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div data-aos="zoom-in" className='absolute -mt-3.5 lg:block hidden'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="14.1642" cy="13.861" r="13.7717" fill="#D3D648" className='animate-pulse' />
                                    <circle cx="14.1649" cy="13.8607" r="8.263" fill="#D3D648" />
                                </svg>

                            </div>

                            <div className="border-l border-white-100 lg:mt-5 mt-0 mb-3 h-14">

                            </div>

                            <div data-aos="flip-right" className="border border-yellow-100 rounded-2xl text-white-100 p-5 lg:w-56">

                                <h5 className="text-2xl py-4 font-semibold">
                                    PHASE 4
                                </h5>

                                <ul className="space-y-4">
                                    <li>
                                        ♦️ CEX LISTINGS
                                    </li>
                                    <li>
                                        ♦️ HARDWARE WALLET DEVELOPMENT
                                    </li>
                                    <li>
                                        ♦️ EXPAND TO WORLDWIDE COMMUNITY
                                    </li>
                                    <li>
                                        ♦️ REACH 20M MC & 5K HOLDERS
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

            {/* partners */}

            <div id='partners' className="">


                <div className="lg:py-20 py-5 lg:px-8 px-5 container mx-auto">

                    <h3 className="text-blue-100 md:text-6xl text-2xl text-center leading-loose font-chucklesome font-bold">
                        PARTNERS
                    </h3>

                    <div className="lg:mt-12 mt-6 flex items-center justify-center gap-6">
                        <a href='/' className='border-4 border-yellow-100 rounded-2xl py-4 px-3 lg:w-52 hover:bg-yellow-100'>
                            <img src={p_1} alt="" className='flex mx-auto w-24' />
                        </a>

                        <a href='/' className='border-4 border-yellow-100 rounded-2xl py-4 px-3 lg:w-52 hover:bg-yellow-100'>
                            <img src={p_2} alt="" className='flex mx-auto' />
                        </a>

                        <a href='/' className='border-4 border-yellow-100 rounded-2xl py-4 px-3 lg:w-52 hover:bg-yellow-100'>
                            <img src={p_3} alt="" className='flex mx-auto' />
                        </a>

                        <a href='/' className='border-4 border-yellow-100 rounded-2xl py-4 px-3 lg:w-52 hover:bg-yellow-100'>
                            <img src={p_4} alt="" className='flex mx-auto' />
                        </a>
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
                        <a href='https://twitter.com/shilbarium?t=qsXgwNnNQeMclAQyv3fM2w&s=09'>
                            <img src={twitter} alt="" />
                        </a>
                        <a href='https://t.me/ShilbariumPortal'>
                            <img src={telegram} alt="" />
                        </a>
                    </div>

                </div>


            </div>

            <Footer />

        </div >
    )
}
