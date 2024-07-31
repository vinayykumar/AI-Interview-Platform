import React from 'react'
import { Button } from '@/components/ui/button'
import Link, { useRouter } from 'next/navigation'

function IntereviewCard({interview}) {
  // console.log(interview)
  const router = useRouter();
  const onStart = ()=>{
    router.push('/dashboard/interview/'+interview?.mockId)
  }

  const onFeedback = ()=>{
    router.push('/dashboard/interview/'+interview?.mockId+'/feedback')
  }

  return (
    <div className='border shodow-sm rounded-lg p-3'>
      <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-primary'>{interview.jobPosition}</h2>
        <h2 className='font-bold text-sm text-gray-600'>{interview.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created At : {interview.createdAt}</h2>
      </div>
      <div className='flex justify-between mt-2 gap-5'>
          <Button 
            size={'sm'} 
            variant='outline' 
            className='w-full'
            onClick={onFeedback}
            >Feedback</Button>
        <Button 
          size={'sm'} 
          className='w-full'
          onClick={onStart}>Start</Button>
      </div>
    </div>
  )
}

export default IntereviewCard
