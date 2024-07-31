'use client'
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import IntereviewCard from './IntereviewCard.jsx';
import Image from 'next/image.js';
import { ai_interview_schema } from '@/utils/schema.js';
import SkeletonCard from './SkeletonCard.tsx';


function InterviewList() {

  const {user} = useUser();
  const [InterviewList,setInterviewList] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
      user && getInterviews();
      // console.log('Try Karig')
      // console.log('Result is', InterviewList);
  },[user])

  const getInterviews = async ()=> {
    setLoading(true);  
    const result = await db.select()
                    .from(ai_interview_schema)
                    .where(eq(ai_interview_schema?.createdBy,user?.primaryEmailAddress.emailAddress))
                    .orderBy(desc(ai_interview_schema?.id))   
    setInterviewList(result)
    setLoading(false);
  }

  // console.log(InterviewList)  

  return (
    <div>
      <h2 className='font-medium text-xl mt-10'>My Interviews</h2>
      {loading ? 
        (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
        )
        :
        InterviewList?.length==0 ? 
          <>
          <div className='flex flex-col justify-center'>
            <h2 className='text-lg text-bold text-gray-500 mt-5 ml-24'>No Record</h2>
          </div>
          </>
             :
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
            {InterviewList && InterviewList.map((interview,index)=>(
                <IntereviewCard 
                    className={'my-5'}
                    key={index}
                    interview={interview}
                    ></IntereviewCard>
            ))}
          </div>
    }
    </div>
  )
}

export default InterviewList
