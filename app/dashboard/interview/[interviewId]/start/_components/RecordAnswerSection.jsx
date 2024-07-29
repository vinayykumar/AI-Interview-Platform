import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

function RecordAnswerSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted && (
    <div className='flex flex-col justify-center items-center'>
        <div className='my-10 flex flex-col justify-center items-center bg-gray-300 rounded-lg p-5'>
            <Image 
                src={'/webcam-symbol-icon-vector-logo-.png'}
                width={160} height={160}
                className='absolute'
                alt='meowy'/>
            <Webcam 
                style={{height:300,width:'100%',zIndex:10}}
                mirrored={true}/>
        </div>
        <Button variant='outline'>Record Answer</Button>
    </div>
  )
}

export default RecordAnswerSection
