import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r_1 from '../assets/r-1.png';
import r_2 from '../assets/r-2.png';
import r_3 from '../assets/r-3.png';
import r_4 from '../assets/r-4.png';
import r_5 from '../assets/r-5.png';
import r_6 from '../assets/r-6.png';
import r_7 from '../assets/r-7.png';
import r_8 from '../assets/r-8.png';
import r_9 from '../assets/r-9.png';



function ImageSlider() {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        cssEase: "linear",
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
            }
        }]
    }

    const [show, setShow] = useState(false);

    const slider = React.useRef(null);

    return (
        <div className="">

            <Slider ref={slider} {...settings}>

                <div className="lg:p-8 p-4 border-2 border-pink-100 mt-12 mb-6 font-inter">
                    <div className="lg:flex gap-8">
                        <div className="flex gap-8 items-center">
                            <div>
                                <img src={r_1} alt="" className='roadmap-img' />
                            </div>
                            <div className='flex flex-col gap-y-6'>
                                <img src={r_2} alt="" className='roadmap-img' />
                                <img src={r_3} alt="" className='roadmap-img' />
                            </div>
                        </div>

                        <div className='lg:w-5/12 w-full lg:pt-0 pt-5'>
                            <h3 className="text-2xl font-bold">
                                Twitter Bot
                                Release
                            </h3>

                            <p className="py-5">
                                The AIDoge bot for Twitter is 100% free to use for anyone with access to Twitter. The AIDoge Twitter bot uses DogeGPT for text-based responses and Stable Diffusion for image generation. When used properly, the bot will reply to your tweet with an Ai generated response or image.
                            </p>

                            <button className="rounded-lg border-2 border-white-100 px-5 py-2">
                                Completed
                            </button>
                        </div>


                    </div>
                </div>

                <div className="lg:p-8 p-4 border-2 border-pink-100 mt-12 mb-6 font-inter">
                    <div className="lg:flex gap-8">
                        <div className="flex gap-8 items-center">
                            <div>
                                <img src={r_4} alt="" className='roadmap-img' />
                            </div>
                            <div className='flex flex-col gap-y-6'>
                                <img src={r_5} alt="" className='roadmap-img' />
                                <img src={r_6} alt="" className='roadmap-img' />
                            </div>
                        </div>

                        <div className='lg:w-5/12 w-full lg:pt-0 pt-5'>
                            <h3 className="text-2xl font-bold">
                                Stable Diffusion
                                Models Release
                            </h3>

                            <p className="py-5">
                                To complement our migration to Stable Diffusion, we are implementing multiple models that will be readily available to our users. These models will allow users to create images based on the theme and style of art.
                            </p>

                            <button className="rounded-lg border-2 border-white-100 px-5 py-2">
                                To Be Achieved
                            </button>
                        </div>


                    </div>
                </div>

                <div className="lg:p-8 p-4 border-2 border-pink-100 mt-12 mb-6 font-inter">
                    <div className="lg:flex gap-8">
                        <div className="flex gap-8 items-center">
                            <div>
                                <img src={r_7} alt="" className='roadmap-img' />
                            </div>
                            <div className='flex flex-col gap-y-6'>
                                <img src={r_8} alt="" className='roadmap-img' />
                                <img src={r_9} alt="" className='roadmap-img' />
                            </div>
                        </div>

                        <div className='lg:w-5/12 w-full lg:pt-0 pt-5'>
                            <h3 className="text-2xl font-bold">
                                Machine Learning
                                & Data Collection
                            </h3>

                            <p className="py-5">
                                Data collection and model training for the chatbot in the crypto-telegram niche will commence. Having a model trained for such purposes will alow for a more custom user feel when requesting data and generating images.
                            </p>

                            <button className="rounded-lg border-2 border-white-100 px-5 py-2">
                                To Be Achieved
                            </button>
                        </div>


                    </div>
                </div>

            </Slider>

            <div className="pt-8">

                <div className="progressbar-line border-b-2 border-pink-100 lg:flex hidden text-white-100 ">

                    <button onClick={() => slider?.current?.slickPrev()} className="absolute -mt-4 text-lg font-inter">
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="19.5" cy="19.5" r="19.5" fill="#EF09DA" />
                        </svg>

                        2023
                    </button>

                    <button onClick={() => slider?.current?.slickNext() && setShow(!show)} className="absolute -mt-3 left-1/3 text-lg font-inter">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.5" cy="11.5" r="10" stroke="#EF09DA" stroke-width="3" fill="#06071B" />
                        </svg>

                        {show ?
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="19.5" cy="19.5" r="19.5" fill="#EF09DA" />
                            </svg>
                            : null}
                        2023
                    </button>

                    <button onClick={() => slider?.current?.slickNext()} className="absolute -mt-3 right-1/3 text-lg font-inter">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.5" cy="11.5" r="10" stroke="#EF09DA" stroke-width="3" fill="#06071B" />
                        </svg>

                        2024
                    </button>

                    <button className="absolute -mt-3 right-0 mr-28 text-lg font-inter">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.5" cy="11.5" r="10" stroke="#EF09DA" stroke-width="3" fill="#06071B" />
                        </svg>

                        Coming soon
                    </button>
                </div>

                <div className="progressbar-line border-b-2 border-pink-100 lg:hidden flex text-white-100 ">

                    <button onClick={() => slider?.current?.slickPrev()} className="absolute -mt-3 left-12 text-lg font-inter">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.5" cy="11.5" r="10" stroke="#EF09DA" stroke-width="3" fill="#06071B" />
                        </svg>
                    </button>

                    <button onClick={() => slider?.current?.slickNext()} className="absolute -mt-3 right-12 text-lg font-inter">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.5" cy="11.5" r="10" stroke="#EF09DA" stroke-width="3" fill="#06071B" />
                        </svg>

                    </button>
                </div>

            </div>

        </div>

    )


}

export default ImageSlider 