'use client'
import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';


function RecordAnswerSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isCamera,setIsCamera] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted && (
    <div className='flex flex-col justify-center items-center'>
        <div className='my-10 flex flex-col justify-center items-center bg-black rounded-lg p-5'>
        {!isCamera && <div className='flex items-center justify-center w-96 h-80 h-400px'>
                <Image 
                    src={'/webcam-symbol-icon-vector-logo-.png'}
                    width={160} height={160}
                    // className='absolute'
                    alt='meowy'/>
            </div>}
                {isCamera && <div className='flex items-center justify-center w-96 h-80 h-400px'>
                    <Webcam 
                        style={{height:300,width:'100%',zIndex:10}}
                        mirrored={true}/>
            </div> }

        </div>
        <Button 
            variant='outline'
            onClick={isRecording? stopSpeechToText : startSpeechToText}>
            {isRecording?
                <h2 className='flex items-center gap-2'>
                    <Mic></Mic> Recording...
                </h2>:
                'Record Answer'
            }
        </Button>
        
    </div>
  )
}

export default RecordAnswerSection
