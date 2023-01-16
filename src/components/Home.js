import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
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
import scroll from '../assets/scroll.png';
import hand from '../assets/hand.png';
import side_1 from '../assets/side-1.png';
import side from '../assets/side.png';
import circle_top from '../assets/circle-top.png';
import doge from '../assets/doge.png';
import Typed from "react-typed"
import Slider from './Slider';



export default function Home() {

    return (
        <div className="bg-blue-50 text-white-100">

            {/* top section */}

            <div className="bg-blue">

                <div className="circle absolute top-5 w-1/2 left-48 lg:block hidden">
                    <img src={circle_top} alt="" className='' />
                </div>

                <div className="lg:px-20 px-5 container mx-auto md:block hidden">
                    <Menu />
                    <div className="lg:flex block justify-between gap-12 items-center py-12">
                        <div className="text-white-100 w-1/2">
                            <h2 className='md:text-6xl text-3xl font-coolvetica font-bold text-black-100'>
                                <Typed
                                    strings={[
                                        'Free to use, cross splatform artificial intelligence that is here to stay'
                                    ]}
                                    typeSpeed={50}
                                    cursorChar={''}

                                />
                            </h2>
                        </div>

                        <div className="w-1/2">
                            <img src={doge} alt="Logo" className="lg:float-right lg:mt-0 mt-8" />
                        </div>

                    </div>

                </div>

                <a href='#project' className="py-8 flex flex-col items-center justify-center gap-y-5 font-inter hover:text-pink-100">
                    <p className="">
                        Scroll down
                    </p>
                    <img src={scroll} alt="" className='animate-bounce' />
                </a>

                <div className="md:hidden block">
                    <Menu />

                    <div className="text-white-100 flex flex-col items-center py-20">

                        <h2 className='text-5xl font-coolvetica font-bold px-5'>
                            Free to use, cross

                            platform artificial

                            intelligence that is here to stay
                        </h2>

                    </div>
                </div>

            </div>


            {/* projects-section */}

            <div id='project' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">
                    <div className="lg:flex items-center justify-between">

                        <div className="lg:w-5/12 w-full img-item relative">
                            <img src={p_1} alt="" className='' />
                        </div>

                        <div className="text-white-100 lg:w-5/12 w-full lg:mt-0 mt-8">
                            <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100'>

                                <Typed
                                    strings={[
                                        'Aidoge  on Telegram'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}

                                />
                            </h2>

                            <p className="py-6 font-inter">

                                <Typed
                                    strings={[
                                        '    The AIDoge chatbot for telegram is 100% free to use for anyone with access to Telegram. This bot can be added to any telegram group and is also accessible via direct messaging. The AIDoge chatbot uses DogeGPT for text-based responses and Stable Diffusion for image generation. Read our documentation on how to use the Telegram bot'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}

                                />
                            </p>

                            <div className="flex gap-8 items-center">
                                <a href='https://t.me/DogeGPTBot' className='border border-pink-100 rounded-lg font-inter lg:px-5 px-3 md:text-sm cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100'>
                                    <img src={bot} alt="" className='pr-2 border-r border-pink-100' />

                                    Telegram Bot
                                </a>

                                <a href='https://t.me/AIDogeChat' className='border border-pink-100 rounded-lg font-inter lg:px-5 px-3 md:text-sm cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100'>
                                    <img src={telegram} alt="" className='pr-2 border-r border-pink-100' />

                                    Official Telegram
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto text-white-100 ">
                    <div className="lg:flex items-center justify-between">

                        <div className="lg:w-5/12 w-full">
                            <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100'>
                                <Typed
                                    strings={[
                                        ' Project on Twitter'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}

                                />
                            </h2>
                            <p className="py-6 font-inter">

                                <Typed
                                    strings={[
                                        'The Aidoge bot for Twitter is 100% free to use for anyone with access to Twitter. The Aidoge Twitter bot uses ChatGDP for text-based responses and Stable Diffusion for image generation.When used properly, the bot will reply to your tweet with an Ai generated response or image. Read our documentation on how to use the Twitter bot.'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}

                                />
                            </p>

                            <div className="flex gap-8 items-center">
                                <a href='https://twitter.com/AIDogeBsc' className='border border-pink-100 rounded-lg font-inter lg:px-5 px-3 md:text-sm cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100'>
                                    <img src={bot} alt="" className='pr-2 border-r border-pink-100' />

                                    TWitter Bot
                                </a>

                                <a href='https://twitter.com/AIDogeBsc' className='border border-pink-100 rounded-lg font-inter lg:px-5 px-3 md:text-sm cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100'>
                                    <img src={twitter} alt="" className='pr-2 border-r border-pink-100' />

                                    Official Twitter
                                </a>
                            </div>
                        </div>

                        <div className="img-item relative lg:w-5/12 w-full lg:mt-0 mt-8">
                            <img src={p_2} alt="" />
                        </div>
                    </div>
                </div>

            </div>


            {/* why choose us */}

            <div className="circle absolute left-0 lg:block hidden">
                <img src={side} alt="" className='' />
            </div>

            <div id='about' className="">

                <div className="flex lg:mb-12 items-center gap-32">
                    <img src={hand} alt="" className='lg:block hidden' />

                    <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100'>
                        Why choose Us?
                    </h2>

                </div>

                <div className="lg:pb-20 lg:px-20 px-5 container mx-auto">


                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 my-8">

                        <div className='border-2 border-pink-100 p-5 font-inter'>
                            <div className="flex items-center justify-between gap-6">
                                <img src={rocket} alt="" />
                                <h3 className='text-xl font-semibold'>Mass
                                    Exposure</h3>
                            </div>

                            <p className="py-6">
                                <Typed
                                    strings={[
                                        'Over 10k requests made, 100 groups. With these numbers, we are leading the race by a mile in Telegram and Twitter Ai bots..'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}

                                />
                            </p>

                        </div>

                        <div className='border-2 border-pink-100 p-5 font-inter'>
                            <div className="flex items-center justify-between gap-6">
                                <img src={shield} alt="" />
                                <h3 className='text-xl font-semibold'>Safety</h3>
                            </div>

                            <p className="py-6">
                                <Typed
                                    strings={[
                                        'Our smart contract is renounced and our team is trusted. We believe in making an impact and leaving a lasting impression.'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}

                                />
                            </p>

                        </div>

                        <div className='border-2 border-pink-100 p-5 font-inter'>
                            <div className="flex items-center justify-between gap-6">
                                <img src={ai} alt="" />
                                <h3 className='text-xl font-semibold'>In House Development</h3>
                            </div>

                            <p className="py-6">
                                <Typed
                                    strings={[
                                        'All development is done by members of the team who are active users of the products we produce. The vision we have is the creation we make.'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}

                                />
                            </p>

                        </div>

                        <div className='border-2 border-pink-100 p-5 font-inter'>
                            <div className="flex items-center justify-between gap-6">
                                <img src={bulb} alt="" />
                                <h3 className='text-xl font-semibold'>Experienced Team</h3>
                            </div>

                            <p className="py-6">
                                <Typed
                                    strings={[
                                        'Our team is comprised of professional developers and well known marketers. We stand by delivering on what we say and when we say.'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}

                                />
                            </p>

                        </div>

                    </div>
                </div>

            </div>

            {/* UPGRADE TO BOT */}

            <div id='services' className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto">

                <div className="lg:flex gap-12">

                    <div className='lg:w-5/12 w-full lg:hidden block text-center'>

                        <h2 className='md:text-4xl text-2xl font-coolvetica font-bold mt-12'>
                            UPGRADE TO BOT
                        </h2>
                        <p className="py-5 font-inter">
                            <Typed
                                strings={[
                                    'It will cost you to upgrade the bot, develop the bot or promote on our bot, all paid in $AIDoge token. 50% of tokens paid from buyers will be airdropped to all holders, the remaining 50% we will use for future development. However, it is not ruled out that we will burn it.'
                                ]}
                                typeSpeed={40}
                                cursorChar={''}

                            />
                        </p>
                    </div>

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

                    <div className='lg:w-5/12 w-full'>

                        <h2 className='md:text-4xl text-2xl font-coolvetica font-bold mt-12 lg:block hidden'>
                            UPGRADE TO BOT
                        </h2>
                        <p className="py-5 font-inter">
                            <Typed
                                strings={[
                                    'It will cost you to upgrade the bot, develop the bot or promote on our bot, all paid in $AIDoge token. 50% of tokens paid from buyers will be airdropped to all holders, the remaining 50% we will use for future development. However, it is not ruled out that we will burn it.'
                                ]}
                                typeSpeed={40}
                                cursorChar={''}

                            />
                        </p>
                    </div>
                </div>
            </div>

            <div className="circle absolute right-0 -mt-32 lg:block hidden">
                <img src={side_1} alt="" className='' />
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

                            <h3 className='text-xl font-semibold pt-5'>Developement - 2%</h3>

                            <p className="py-6">
                                <Typed
                                    strings={[
                                        'Covers costs related to maintenance improvements of the AIDogeBot.'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}

                                />
                            </p>

                        </div>

                        <div className='border-2 border-pink-100 p-5 font-inter'>

                            <h3 className='text-xl font-semibold pt-5'>Marketing - 2%</h3>

                            <p className="py-6">
                                <Typed
                                    strings={[
                                        'Gives our community exposure and helps us to grow'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}

                                />
                            </p>

                        </div>

                        <div className='border-2 border-pink-100 p-5 font-inter'>

                            <h3 className='text-xl font-semibold pt-5'>Donation - 1%</h3>

                            <p className="py-6">
                                <Typed
                                    strings={[
                                        'Supports AI Research by donating to the team behind AIDoge.'
                                    ]}
                                    typeSpeed={40}
                                    cursorChar={''}
                                />
                            </p>

                        </div>
                    </div>

                    <div className="circle absolute left-0 -mt-32 lg:block hidden">
                        <img src={side} alt="" className='' />
                    </div>
                </div>
            </div>

            {/* roadmap */}

            <div id='features' className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto text-white-100">
                <div className="">
                    <h2 className='md:text-4xl text-2xl font-coolvetica font-bold text-black-100 text-center'>
                        ROADMAP
                    </h2>

                    <Slider />

                </div>

            </div>

            {/* token listing */}

            <div id='updates' className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">
                <div className=" text-center">
                    <h2 className='md:text-4xl text-2xl font-coolvetica font-bold'>
                        TOKEN LISTINGS
                    </h2>

                    <div className="flex justify-center pt-8">
                        <h2 className='md:text-7xl text-blue-50 text-3xl font-coolvetica font-bold uppercase text-outline'>
                            coming soon
                        </h2>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}
