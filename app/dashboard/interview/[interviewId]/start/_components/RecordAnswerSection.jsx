'use client'
import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import useSpeechToText from 'react-hook-speech-to-text';
import { Camera, CameraOff, Mic } from 'lucide-react';
import { toast } from "sonner"
import { chatSession } from '@/utils/GeminiAIModel';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';


function RecordAnswerSection({mockInterviewQuestion, activeQuestion, interviewData}) {
  const [isCamera,setIsCamera] = useState(true);
  const [userAnswer,setUserAnswer] = useState('');
  const {user} = useUser();
  const [loading,setLoading] = useState(false);

  const {error, interimResult, isRecording, results, startSpeechToText, stopSpeechToText,}
   = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(()=>{
    results.map((result)=>{
        setUserAnswer(prevAns => prevAns + result?.transcript)
    })
  },[results])

  useEffect(()=>{
    if(!isRecording && userAnswer.length>10){
        UpdateUserAnswerInDB();
    }
  },[userAnswer])

  const SaveUserAnswer = async ()=> {
    if(isRecording){
        stopSpeechToText();
    }
    else{
        startSpeechToText();
    }
  }

  const UpdateUserAnswerInDB = async ()=> {
    // console.log(userAnswer);
    setLoading(true);
    
    const feedbackPrompt = `Question : + ${mockInterviewQuestion[activeQuestion]?.question} ,
    User Answer : ${userAnswer} . Depend on Question and User Answer of the interview question give rating and generate a feedback as area of improvement in just 3-5 lines to improve it in JSON format with rating,feedback fields`;
    
    const result = await chatSession.sendMessage(feedbackPrompt);
    const mockResp = (result.response.text()).replace('```json','').replace('```','').trim();
    // console.log(mockResp)
    const JSONFeedBackResponse = JSON.parse(mockResp)
    // console.log(JSONFeedBackResponse)
    const resp = await db.insert(UserAnswer).values({
        mockIdRef:interviewData?.mockId,
        question:mockInterviewQuestion[activeQuestion]?.question,
        correctAns:mockInterviewQuestion[activeQuestion]?.answer,
        userAns:userAnswer,
        feedback:JSONFeedBackResponse?.feedback,
        rating:JSONFeedBackResponse?.rating,
        userEmail:user?.primaryEmailAddress.emailAddress,
        createdAt:moment().format('DD-MM-yyyy')
    })

    if(resp){
        toast("User Answer Recorded Successfully")
    }
    setUserAnswer('')
    setLoading(false);
  }

  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='my-10 flex flex-col justify-center items-center bg-black rounded-lg p-5'>
        {isCamera==false && <div className='flex items-center justify-center w-96 h-80 h-400px'>
                <Image 
                    src={'/webcam-symbol-icon-vector-logo-.png'}
                    width={160} height={160}
                    // className='absolute'
                    alt='meowy'/>
            </div>}
                {isCamera && <div className='flex items-center justify-center w-96 h-80 h-400px'>
                    <Webcam 
                        style={{height:260,width:'100%',zIndex:10}}
                        mirrored={true}/>
            </div> }

        </div>
        <div className='flex gap-2'>
            <Button 
                variant='outline'
                onClick={()=>setIsCamera(!isCamera)}>
                    {isCamera ? <Camera /> : <CameraOff />}
            </Button>
            <Button 
                variant='outline'
                disabled={loading}
                onClick={SaveUserAnswer}>
                {isRecording?
                    <h2 className='flex animate-pulse items-center gap-2 text-red-600'>
                        <Mic></Mic> Recording...
                    </h2>:
                    'Record Answer'
                }
            </Button>
        </div>
    </div>
  )
}

export default RecordAnswerSection;
