'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';

function Header() {

  const path = usePathname();
  const router = useRouter();
  const {user} = useUser();

  return (
    <div className='flex p-6 items-center justify-between border border-t-2 md:px-16 sm:px-14 '>
      <div>
      <Image 
        src='/logo.svg' 
        width={160} 
        height={160} 
        alt='logo'
        onClick={() => router.replace("/")}
        className='cursor-pointer md:w-40' />
      </div>
      <div className='flex'>
        <ul className='hidden md:flex gap-6'>
          {user && <li 
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}
            onClick={() => router.replace("/dashboard")}>DashBoard</li> }
          
            <li 
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions' && 'text-primary font-bold'}`}>Questions</li>

          <li 
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-primary font-bold'}`}
            onClick={() => router.replace("/upgrade")}>Upgrade</li>

          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how' && 'text-primary font-bold'}`}>How it works?</li>
        </ul>
      </div>
      <div className='flex justify-end lg:w-40'>
       {user ?
         <UserButton /> : <Button onClick={() => router.replace("/dashboard")}>Get Started</Button>
         } 
      </div>
    </div>
  );
}

export default Header;
