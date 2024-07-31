import React from 'react'
import { useRouter } from "next/navigation";
import {Twitter,Facebook,Instagram,Github} from 'lucide-react'

function footer() {
    const router = useRouter();
  return (
    <footer>
    <div className="px-20 pt-20 mt-10 w-full flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div className='cursor-pointer' onClick={() => router.replace("/")}>
                <span className="relative inline-flex sm:inline">
                    <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-60 w-full h-full absolute inset-0"></span>
                    <span className="relative text-4xl  font-bold leading-tight text-gray-900">VirtuoAI</span>
                </span>
            </div>
            <div className="flex text-bold text-gray-700 px-4 sm:gap-10 md:gap-12 gap-14 md:text-md lg:text-xl">
                <p>About</p>
                <p>Features</p>
                <p>Work</p>
                <p>Support</p>
            </div>
            <div className="flex gap-8 md:gap-10 lg:gap-8">
                <Twitter fill="black"/>
                <Facebook fill="black"/>
                <Instagram />
                <Github fill="black"/>
            </div>
    </div>

    <div className="px-20">
        <div className="border-t-2 w-full  mt-12 px-12"></div>
    </div>
    <div className="w-full flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center justify-between px-20 mt-4 py-10 gap-10">
        <div className="text-center flex gap-6 text-xl text-gray-600">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
        </div>
        <div className="text-center flex gap-10 text-xl text-gray-600">
            <h2>© Copyright 2021, All Rights Reserved</h2>
        </div>
    </div>
</footer>
  )
}

export default footer
