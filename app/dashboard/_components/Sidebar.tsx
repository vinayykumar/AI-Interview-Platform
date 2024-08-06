import react, { useState } from 'react'
import { usePathname , useRouter} from 'next/navigation';
import {X} from 'lucide-react'
import { useUser } from '@clerk/nextjs';

type SidebarProps = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  const path = usePathname();
  const router = useRouter();
  const {user} = useUser();
  return <>
  <div className={`w-full h-full ${open} md:hidden lg:hidden absolute`}>
    <div className='w-2/3 h-full  bg-white absolute z-50 py-10 px-10 '>
      <div className='flex flex-col items justify-center'>
          <div className='flex items-center justify-between'>
            <div className='cursor-pointer md:w-40' onClick={() => router.push("/")}>
                  <span className="relative inline-flex sm:inline">
                      <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-60 w-full h-full absolute inset-0"></span>
                      <span className="relative text-3xl font-bold leading-tight text-gray-900">VirtuoAI</span>
                  </span>
            </div>
            <X onClick={()=>setOpenSidebar(!openSidebar)}/>
          </div>
          <ul className='flex flex-col text-2xl text-gray-700 mt-20 gap-10'>

            {user && <li 
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}
              onClick={() => router.push("/dashboard")}>DashBoard</li>}

            <li
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/faqs' && 'text-primary font-bold'}`}
              onClick={() => router.push("/faqs")}
            >FAQs</li>

            <li
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/upgrade' && 'text-primary font-bold'}`}
              onClick={() => router.push("/upgrade")}
              >Upgrade</li>
            <li>How it Works?</li>
          </ul>
      </div>
    </div>
    <div className='w-1/3 h-96 bg-red-600'></div>
  </div>
  </>
}

export default Sidebar;