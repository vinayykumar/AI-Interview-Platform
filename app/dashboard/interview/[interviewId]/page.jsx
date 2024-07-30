'use client'
import React, { useEffect, useState } from 'react'
import {db} from '../../../../utils/db'
import {ai_interview_schema} from '../../../../utils/schema'
import {eq} from 'drizzle-orm'
import Webcam from "react-webcam";
import {WebcamIcon, Lightbulb} from 'lucide-react'
import { Button } from "@/components/ui/button";
import Link from 'next/link'


function Interview({params}) {
  const [interviewData,setInterviewData] = useState({});
  const [webCanEnabled,setWebCamEnabled] = useState(false);

  useEffect(()=>{
    // console.log(params.interviewId);
    getInterviewDetails();
  },[])

  const getInterviewDetails = async () => {
    const result = await db.select().from(ai_interview_schema).where(eq(ai_interview_schema.mockId,params.interviewId))
    console.log('Interview Details :',result[0]);
    setInterviewData(result[0])
  }

  return (
    <div className='my-10'>
      <h2 className='font-bold text-2xl'>Let's Get Started</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Details */}
          <div className='flex flex-col my-5 gap-5'>
            <div className='flex flex-col p-5 rounded-lg border gap-5'>
              <h2 className='text-lg'><strong>Job Role/Job Position : </strong>{interviewData.jobPosition}</h2>
              <h2 className='text-lg'><strong>Job Description/Tech Stack : </strong>{interviewData.jobDescription}</h2>
              <h2 className='text-lg'><strong>Years of Experience : </strong>{interviewData.jobExperience}</h2>
            </div>
            <div className=' flex flex-col gap-4 p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb /> <strong>Information</strong></h2>
                <h2>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
            </div>
          </div>

        {/* Camera */}
          <div>
            {webCanEnabled ?
                <div className='flex flex-col items-center gap-4'>
                  <Webcam
                    onUserMedia={()=>setWebCamEnabled(true)}
                    onUserMediaError={()=>setWebCamEnabled(false)}
                    mirrored={true}
                    style={{height:300,width:300}}></Webcam>
                  <Button className='w-full' variant='outline' onClick={()=> setWebCamEnabled(false)}><strong>Disable Webcam & Microphone</strong></Button>
                  <Button className='w-full'>Start Interview</Button>
                </div>
                  :
                  <div className='flex flex-col items-center w-full gap-4'>
                      <WebcamIcon className='h-72 w-full my-5 p-20 bg-secondary border rounded-lg'></WebcamIcon>
                      <Button className='w-full' variant='outline' onClick={()=> setWebCamEnabled(true)}><strong>Enable Webcam & Microphone</strong></Button>

                      <Link className='w-full' href={`/dashboard/interview/${params.interviewId}/start`}>
                        <Button className='w-full'>Start Interview</Button>
                      </Link>
                  </div>  
            }
          </div>
      </div>
    </div>
  )
}

export default Interview;
