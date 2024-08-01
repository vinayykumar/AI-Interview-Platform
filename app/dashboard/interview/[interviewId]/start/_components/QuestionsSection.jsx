'use client'
import React, { useEffect, useState } from 'react'
import {Lightbulb, Volume2} from 'lucide-react'

function QuestionsSection({mockInterviewQuestion, activeQuestion, setActiveQuestion}) {
  const [isSpeaking,setIsSpeaking] = useState(false);
  const textToSpeech = (text) => {
    if('speechSynthesis' in window){
      if(!isSpeaking){
        const speech = new SpeechSynthesisUtterance(text);
        speech.onstart = () => {
          setIsSpeaking(true);
        }
        speech.onend = () => {
          setIsSpeaking(false); 
        }
        window.speechSynthesis.speak(speech);
      }
    }
    else{
      alert('Browser Does not support text to speech')
    }
  }

  // console.log(mockInterviewQuestion)

  return mockInterviewQuestion &&  (
    <div className='p-5 border rounded-lg my-10 min-w-96'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {mockInterviewQuestion && mockInterviewQuestion.map((question,index)=>(
              <h2 key={index} className={`w-28 p-2 rounded-full text-xs md:text-sm text-center ${activeQuestion === index ? 'bg-blue-700 text-white' : 'bg-secondary'}`}>
              Question {index + 1}
            </h2>
            ))}
        </div>
        <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestion]?.question}</h2>
        <Volume2 
          className='cursor-pointer'
          onClick={
          ()=> textToSpeech(mockInterviewQuestion[activeQuestion]?.question)
        }></Volume2>

        <div className='mt-20 border rounded-lg p-5 bg-blue-100 '>
          <h2 className='flex gap-2 items-center text-blue-800'>
            <Lightbulb></Lightbulb>
            <strong>Note</strong>
          </h2>
          <h2 className='mt-4 text-sm text-blue-800'>Click on Record Answer when you want to answer the question. At
              the end of interview we will give you the feedback along with
              correct answer for each of question and your answer to compare
              it.
          </h2>
        </div>
    </div>
    
  )
}

export default QuestionsSection;
