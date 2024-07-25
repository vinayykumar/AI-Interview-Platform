import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <div className='flex p-6 items-center justify-between border border-t-2'>
      <Image src='/logo.svg' width={160} height={160} alt='logo' />
      <div className='flex'>
        <ul className='flex space-x-20'>
          <li>DashBoard</li>
          <li>Questions</li>
          <li>Upgrade</li>
          <li>How it works?</li>
        </ul>
      </div>
      <div className='mr-2'>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
