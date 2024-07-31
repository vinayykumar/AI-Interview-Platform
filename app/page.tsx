'use client'
import Image from "next/image";
import {Button} from '../components/ui/button'
import Header from "./dashboard/_components/Header";
import { useRouter } from "next/navigation";
import {Twitter,Facebook,Instagram,Github} from 'lucide-react'

export default function Home() {
  const router = useRouter();
  return (
    <>
  <Header></Header>
    <div className="overflow-x-hidden bg-gray-50 ">
    {/* <header className="py-4 md:py-6 " x-data="{expanded: false}">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                    <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                        <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" alt="" />
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="text-gray-900" >
                        <span x-show="!expanded" aria-hidden="true">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </span>

                        <span x-show="expanded" aria-hidden="true">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                    <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Customer Login </a>

                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    </header> */}

    <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                {/* <h1 className="px-6 text-lg text-gray-600 font-inter">AI Powered Interview Platform, made for Everyone</h1> */}
                <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                    <span className="relative inline-flex sm:inline">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        <span className="relative">VirtuoAI</span>
                    </span>
                    <span> an AI powered interview platform</span>
                </p>

                <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                    <a
                        title=""
                        className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-primary border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                        onClick={() => router.replace("/dashboard")}
                    >
                        Interview Now
                    </a>

                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                        role="button"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Learn more
                    </a>
                </div>

                <p className="mt-12 lg:text-lg md:text-md  text-gray-800 font-inter">VirtuoAI is an advanced AI-powered interview platform designed to help you excel in your career. Offering personalized interview questions, detailed feedback, and actionable insights, VirtuoAI prepares you thoroughly to ace your interviews and land your dream job.</p>
            </div>
        </div>

        {/* Image */}
        <div className="pb-12 bg-white">
            <div className="relative">
                <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                <div className="relative mx-auto">
                    <div className="lg:max-w-6xl lg:mx-auto">
                        <img className="transform scale-110" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

            <div className="px-20 text-center flex flex-col gap-16 justify-center items-center">
                <h2 className=" md:text-3xl text-4xl lg:text-5xl font-inter font-bold">Drop us a line or two, we are open for creative minds and collaborations!</h2>

                        <a
                                className="inline-flex items-center justify-center lg:w-80 px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-primary border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                                onClick={() => router.replace("/dashboard")}
                            >
                                Explore Now
                            </a>
                </div>
                
                <div className="px-10 pt-20 mt-10 w-full flex flex-col lg:flex-row gap-10 items-center justify-between">
                        <div className='cursor-pointer' onClick={() => router.replace("/")}>
                            <span className="relative inline-flex sm:inline">
                                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-60 w-full h-full absolute inset-0"></span>
                                <span className="relative text-2xl md:text-3xl font-bold leading-tight text-gray-900">VirtuoAI</span>
                            </span>
                        </div>
                        <div className="flex px-4 sm:gap-10 md:gap-16 gap-14 md:text-xl lg:text-2xl">
                            <p>About</p>
                            <p>Features</p>
                            <p>Work</p>
                            <p>Support</p>
                        </div>
                        <div className="flex gap-8 md:gap-10">
                            <Twitter fill="black"/>
                            <Facebook fill="black"/>
                            <Instagram />
                            <Github fill="black"/>
                        </div>
                </div>

                <div className="px-12">
                    <div className="borsder-t-2 w-full  mt-16 px-12"></div>
                </div>
                <div className="w-full flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center justify-between px-10 mt-4 py-10 gap-10">
                    <div className="text-center flex gap-6 text-xl text-gray-600">
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>
                    </div>
                    <div className="text-center flex gap-10 text-xl text-gray-600">
                        <h2>© Copyright 2021, All Rights Reserved</h2>
                    </div>
                </div>
    </section>
</div>

    </>
  );
}
