import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Menu_Scroll from './Menu_Scroll'
import top from '../assets/top.png';
import p_1 from '../assets/p-1.png';
import p_2 from '../assets/p-2.png';
import bot from '../assets/bot.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';
import rocket from '../assets/rocket.png';
import shield from '../assets/shield.png';
import ai from '../assets/ai.png';
import bulb from '../assets/bulb.png';
import b_1 from '../assets/b-1.png';
import b_2 from '../assets/b-2.png';
import b_3 from '../assets/b-3.png';
import b_4 from '../assets/b-4.png';
import b_5 from '../assets/b-5.png';
import r_1 from '../assets/r-1.png';
import r_2 from '../assets/r-2.png';
import r_3 from '../assets/r-3.png';
import roadmap from '../assets/roadmap.png';



export default function Home() {

    return (
        <div className="bg-blue-50 text-white-100">

            {/* top section */}

            <div className="bg-blue">

                <div className="lg:px-20 px-5 container mx-auto md:block hidden">
                    <Menu />
                    <div className="lg:flex block justify-between items-center py-12">
                        <div className="text-white-100">
                            <h2 className='md:text-6xl text-3xl font-coolvetica font-bold text-black-100'>
                                Next Level

                            </h2>
                            <h2 className='md:text-6xl text-3xl pt-3 font-coolvetica font-bold text-black-100'>
                                Doge
                            </h2>
                            <h2 className='md:text-6xl text-3xl pt-3 font-coolvetica font-bold text-black-100'>
                                Intelligence
                            </h2>

                            <button className="rounded-full font-inter font-semibold px-6 py-2 flex gap-3 items-center bg-pink-100 mt-8">

                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 6L0.25 11.1962L0.25 0.803848L10 6Z" fill="#fff" />
                                </svg>

                                Play demo

                            </button>
                        </div>

                        <div className="font-inter">
                            <img src={top} alt="Logo" className="lg:w-10/12 lg:float-right lg:mt-0 mt-8" />
                        </div>

                    </div>

                </div>

                <div className="md:hidden block">
                    <Menu />

                    <div className="text-white-100 flex flex-col items-center py-20">

                        <h2 className='text-5xl font-coolvetica font-bold text-black-100'>
                            Next Level

                        </h2>
                        <h2 className='text-5xl pt-3 font-coolvetica font-bold text-black-100'>
                            Doge
                        </h2>
                        <h2 className='text-5xl pt-3 font-coolvetica font-bold text-black-100'>
                            Intelligence
                        </h2>

                    </div>
                </div>

            </div>


            {/* projects-section */}

            <div className="bg-img">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">
                    <div className="lg:flex items-center justify-between">

                        <div className="img lg:w-5/12 w-full">
                            <img src={p_1} alt="" />
                        </div>

                        <div className="text-white-100 lg:w-5/12 w-full lg:mt-0 mt-8">
                            <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100'>
                                Project on Telegram
                            </h2>
                            <p className="py-6 font-inter">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                            </p>

                            <div className="flex gap-8 items-center">
                                <div className='border border-pink-100 rounded-lg font-inter lg:px-5 px-3 md:text-sm cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100'>
                                    <img src={bot} alt="" className='pr-2 border-r border-pink-100' />

                                    Telegram Bot
                                </div>

                                <div className='border border-pink-100 rounded-lg font-inter lg:px-5 px-3 md:text-sm cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100'>
                                    <img src={telegram} alt="" className='pr-2 border-r border-pink-100' />

                                    Official Telegram
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto text-white-100 ">
                    <div className="lg:flex items-center justify-between">

                        <div className="lg:w-5/12 w-full">
                            <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100'>
                                Project on Twitter
                            </h2>
                            <p className="py-6 font-inter">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                            </p>

                            <div className="flex gap-8 items-center">
                                <div className='border border-pink-100 rounded-lg font-inter lg:px-5 px-3 md:text-sm cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100'>
                                    <img src={bot} alt="" className='pr-2 border-r border-pink-100' />

                                    TWitter Bot
                                </div>

                                <div className='border border-pink-100 rounded-lg font-inter lg:px-5 px-3 md:text-sm cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100'>
                                    <img src={twitter} alt="" className='pr-2 border-r border-pink-100' />

                                    Official Twitter
                                </div>
                            </div>
                        </div>

                        <div className="img lg:w-5/12 w-full lg:mt-0 mt-8">
                            <img src={p_2} alt="" />
                        </div>
                    </div>
                </div>

            </div>


            {/* why choose us */}

            <div className="bg-hand">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">
                    <div className=" text-center ">
                        <p className="py-12 font-inter">
                            Why choose Us?
                        </p>
                        <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100'>
                            Lorem Impsum dollar here
                        </h2>
                        <p className="py-6 font-inter lg:w-9/12 w-full flex mx-auto">
                            Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 my-8">

                        <div className='border-2 border-pink-100 p-5 font-inter'>
                            <div className="flex items-center justify-between">
                                <img src={rocket} alt="" />
                                <h3 className='text-xl font-semibold'>Lorem Ipsum</h3>
                            </div>

                            <p className="py-6">
                                Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed.
                            </p>

                        </div>

                        <div className='border-2 border-pink-100 p-5 font-inter'>
                            <div className="flex items-center justify-between">
                                <img src={shield} alt="" />
                                <h3 className='text-xl font-semibold'>Lorem Ipsum</h3>
                            </div>

                            <p className="py-6">
                                Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed.
                            </p>

                        </div>

                        <div className='border-2 border-pink-100 p-5 font-inter'>
                            <div className="flex items-center justify-between">
                                <img src={ai} alt="" />
                                <h3 className='text-xl font-semibold'>Lorem Ipsum</h3>
                            </div>

                            <p className="py-6">
                                Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed.
                            </p>

                        </div>

                        <div className='border-2 border-pink-100 p-5 font-inter'>
                            <div className="flex items-center justify-between">
                                <img src={bulb} alt="" />
                                <h3 className='text-xl font-semibold'>Lorem Ipsum</h3>
                            </div>

                            <p className="py-6">
                                Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed.
                            </p>

                        </div>
                    </div>
                </div>

            </div>

            {/* UPGRADE TO BOT */}

            <div className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto">

                <div className="lg:flex gap-12">

                    <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100 lg:hidden block text-center'>
                        UPGRADE TO BOT
                    </h2>

                    <div className="lg:flex gap-6 my-8">

                        <div className='bg_1 p-5 font-inter flex flex-col items-center justify-center mt-20'>
                            <h3 className='lg:text-3xl text-2xl font-semibold text-center'>Private
                                Package</h3>

                            <ul className="list-disc text-lg font-semibold my-6 lg:h-72 ml-0">
                                <li>
                                    Basic Plan
                                </li>
                                <li>
                                    $10/ month
                                </li>
                                <li>
                                    Billed yearly
                                </li>
                                <li>
                                    Pay with $AlDoge
                                </li>
                            </ul>

                            <button className="border-2 border-white-100 px-5 py-2 rounded-full hover:bg-pink-100">
                                Subscribe
                            </button>
                        </div>

                        <div className='bg_2 p-5 font-inter flex flex-col items-center justify-center lg:mt-0 mt-8'>
                            <h3 className='lg:text-3xl text-2xl font-semibold text-center'>Channel
                                Package</h3>


                            <ul className="list-disc text-lg font-semibold my-6 lg:h-72 ml-0">
                                <li>
                                    Pro Plan
                                </li>
                                <li>
                                    $48/ month
                                </li>
                                <li>
                                    Billed vearlv
                                </li>
                                <li>
                                    Pav with $A|Doge
                                </li>
                            </ul>

                            <button className="border-2 border-white-100 px-5 py-2 rounded-full hover:bg-pink-100">
                                Subscribe
                            </button>
                        </div>

                        <div className='bg_3 p-5 font-inter flex flex-col items-center justify-center mt-12'>
                            <h3 className='lg:text-3xl text-2xl font-semibold text-center'>Group
                                Package</h3>

                            <ul className="list-disc text-lg font-semibold my-6 lg:h-72 ml-0">
                                <li>
                                    Basic Plan
                                </li>
                                <li>
                                    $48/ month
                                </li>
                                <li>
                                    Billed yearly
                                </li>
                                <li>
                                    Pay with $AlDoge
                                </li>
                            </ul>

                            <button className="border-2 border-white-100 px-5 py-2 rounded-full hover:bg-pink-100">
                                Subscribe
                            </button>
                        </div>

                    </div>

                    <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100 mt-12 lg:block hidden'>
                        UPGRADE TO BOT
                    </h2>
                </div>
            </div>


            {/* tokenomics */}

            <div className="bg-line">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">
                    <div className=" text-center">
                        <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100'>
                            TOKENOMICS
                        </h2>

                        <p className="py-6 font-inter font-semibold text-xl">
                            Contract Address:
                        </p>

                        <button className="border-2 border-white-100 px-5 py-2 rounded-full hover:bg-pink-100">
                            Click to copy
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 justify-between items-center gap-12 mt-20">


                        <div className='border-2 border-pink-100 p-5 font-inter'>

                            <h3 className='text-xl font-semibold pt-5'>Developement - 1%</h3>

                            <p className="py-6">
                                Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed.
                            </p>

                        </div>

                        <div className='border-2 border-pink-100 p-5 font-inter'>

                            <h3 className='text-xl font-semibold pt-5'>Marketing - 1%</h3>

                            <p className="py-6">
                                Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed.
                            </p>

                        </div>

                        <div className='border-2 border-pink-100 p-5 font-inter'>

                            <h3 className='text-xl font-semibold pt-5'>Donation - 1%</h3>

                            <p className="py-6">
                                Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed.
                            </p>

                        </div>
                    </div>
                </div>

            </div>

            {/* roadmap */}

            <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto text-white-100">
                <div className="">
                    <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100 text-center'>
                        ROADMAP
                    </h2>

                    <div className="lg:p-8 p-4 border-2 border-pink-100 mt-12 mb-6 font-inter">
                        <div className="lg:flex gap-8">
                            <div>
                                <img src={r_1} alt="" className='w-full' />
                            </div>
                            <div className='flex flex-col gap-y-12 lg:pt-0 pt-8'>
                                <img src={r_2} alt="" />
                                <img src={r_3} alt="" />
                            </div>
                            <div className='lg:w-4/12 w-full lg:pt-0 pt-5'>
                                <h3 className="text-2xl font-bold">
                                    Lorem Ipsum
                                </h3>

                                <p className="py-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>

                                <button className="rounded-lg border-2 border-white-100 px-5 py-2">
                                    Completed
                                </button>
                            </div>
                        </div>
                    </div>

                    <img src={roadmap} alt="" />
                </div>

            </div>

            {/* token listing */}

            <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">
                <div className=" text-center">
                    <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100'>
                        TOKEN LISTINGS
                    </h2>

                    <div className="flex justify-center items-center gap-2">
                        <div className="bg-pink-50 rounded-lg">
                            <img src={b_1} alt="" />
                        </div>
                        <div className="bg-pink-50 p-2 rounded-lg">
                            <img src={b_2} alt="" />
                        </div>
                        <div className="bg-pink-50 p-2 rounded-lg">
                            <img src={b_3} alt="" />
                        </div>
                        <div className="bg-pink-50 p-2 rounded-lg">
                            <img src={b_4} alt="" />
                        </div>
                        <div className="bg-pink-50 p-2 rounded-lg">
                            <img src={b_5} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}
