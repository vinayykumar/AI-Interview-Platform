'use client'
import { db } from '@/utils/db'
import { ai_interview_schema } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection.jsx'
import RecordAnswerSection from './_components/RecordAnswerSection.jsx'
import { Button } from '@/components/ui/button.tsx'
import Link from 'next/link.js'

function StartInterview({params}) {

  const [interviewData,setInterviewData] = useState();
  const [mockInterviewQuestion,setMockInterviewQuestion] = useState();
  const [activeQuestion,setActiveQuestion] = useState(0);

  const getInterviewDetails = async () => {
    const result = await db.select().from(ai_interview_schema).where(eq(ai_interview_schema.mockId,params.interviewId))
    const JSONResp =  JSON.parse(result[0]?.jsonMockResponse);
    // console.log(JSONResp);
    // console.log(result[0])
    setInterviewData(result[0]);
    setMockInterviewQuestion(JSONResp);
  }
  
  useEffect(()=>{
    getInterviewDetails();
  },[])


  return (
    <div>
        <div className='grid grid-cols-2 gap-10'>
            <QuestionsSection 
                mockInterviewQuestion={mockInterviewQuestion}
                activeQuestion={activeQuestion}
                setActiveQuestion={setActiveQuestion}
                />
            <RecordAnswerSection
              interviewData={interviewData}
              mockInterviewQuestion={mockInterviewQuestion}
              activeQuestion={activeQuestion}
            />
        </div>
        <div  className='flex justify-end gap-6 mb-7'>
          {activeQuestion>0 && <Button variant='outline' onClick={()=>setActiveQuestion(activeQuestion-1)}>Previous Question</Button>}
          {activeQuestion<4 && <Button onClick={()=>setActiveQuestion(activeQuestion+1)}>Next Question</Button> }
          {activeQuestion==4 && 
            <Link href={'/dashboard/interview/'+interviewData?.mockId+'/feedback'}>
              <Button className='bg-red-600 hover:bg-red-700'>End Interview</Button>
            </Link>
            }
          
        </div>
    </div>
  )
}

export default StartInterview;
