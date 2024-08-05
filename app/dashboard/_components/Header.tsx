'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
// import Sidebar from './Sidebar'

function Header() {

  const path = usePathname();
  const router = useRouter();
  const {user} = useUser();

  return (
    <div className='flex p-6 items-center justify-between border border-t-2 md:px-16 sm:px-14 '>
      {/* <Image 
        src='/logo.svg' 
        width={160} 
        height={160} 
        alt='logo'
        onClick={() => router.replace("/")}
        className='cursor-pointer md:w-40' /> */}
        {/* <Sidebar></Sidebar> */}
            <div className='cursor-pointer md:w-40' onClick={() => router.push("/")}>
              <span className="relative inline-flex sm:inline">
                  <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-60 w-full h-full absolute inset-0"></span>
                  <span className="relative md:text-3xl font-bold leading-tight text-gray-900">VirtuoAI</span>
              </span>
            </div>
      <div className='flex'>
        <ul className='hidden md:flex md:gap-12'>
          {user && <li 
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}
            onClick={() => router.push("/dashboard")}>DashBoard</li> }
          
            <li 
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/faqs' && 'text-primary font-bold'}`}
              onClick={() => router.push("/faqs")}>FAQs</li>

          <li 
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/upgrade' && 'text-primary font-bold'}`}
            onClick={() => router.push("/upgrade")}>Upgrade</li>

          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how' && 'text-primary font-bold'}`}>How it works?</li>
        </ul>
      </div>
      <div className='flex justify-end lg:w-40'>
       {user ?
         <UserButton /> : <Button onClick={() => router.push("/dashboard")}>Get Started</Button>
         } 
      </div>
    </div>
  );
}

export default Header;
