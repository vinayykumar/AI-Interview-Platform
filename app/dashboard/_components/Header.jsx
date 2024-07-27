'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

function Header() {

  const path = usePathname();
  useEffect(()=>{
    console.log(path)
  },[ ])

  return (
    <div className='flex p-6 items-center justify-between border border-t-2 px-20'>
      <Image src='/logo.svg' width={160} height={160} alt='logo' />
      <div className='flex'>
        <ul className='hidden md:flex gap-6'>
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}>DashBoard</li>
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions' && 'text-primary font-bold'}`}>Questions</li>
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how' && 'text-primary font-bold'}`}>How it works?</li>
        </ul>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
