'use client'
import React, { useEffect, useState } from 'react'
import {db} from '../../../../utils/db'
import {ai_interview_schema} from '../../../../utils/schema'
import {eq} from 'drizzle-orm'
import Webcam from "react-webcam";
import {WebcamIcon} from 'lucide-react'
import { Button } from "@/components/ui/button";


function Interview({params}) {
  const [interviewData,setInterviewData] = useState({});
  const [webCanEnabled,setWebCamEnabled] = useState(false);

  useEffect(()=>{
    console.log(params.interviewId);
    getInterviewDetails();
  },[])

  const getInterviewDetails = async () => {
    const result = await db.select().from(ai_interview_schema).where(eq(ai_interview_schema.mockId,params.interviewId))
    console.log(result);
    setInterviewData(result[0])
  }

  return (
    <div className='my-6 flex justify-center flex-col items-center'>
      <h2 className='font-bold text-2xl'>Let's Get Started</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Details */}
          <div className='flex flex-col my-5'>
            <h2 className='text-lg'><strong>Job Role/Job Position : </strong>{interviewData.jobPosition}</h2>
            <h2 className='text-lg'><strong>Job Description/Tech Stack : </strong>{interviewData.jobDescription}</h2>
            <h2 className='text-lg'><strong>Years of Experience : </strong>{interviewData.jobExperience}</h2>
          </div>

        {/* Camera */}
          <div>
            {webCanEnabled ?
                <div className='flex flex-col items-center'>
                  <Webcam
                    onUserMedia={()=>setWebCamEnabled(true)}
                    onUserMediaError={()=>setWebCamEnabled(false)}
                    style={{height:300,width:300}}></Webcam>
                  <Button onClick={()=> setWebCamEnabled(false)}>Disable Camera and Microphone</Button>
                </div>
                  :
                  <div className='flex flex-col items-center'>
                      <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary border rounded-lg'></WebcamIcon>
                      <Button onClick={()=> setWebCamEnabled(true)}>Enable Webcam and Microphone</Button>
                  </div>  
            }
          </div>

      </div>
      {/* {console.log(interviewData)}  */}
    </div>
  )
}

export default Interview
