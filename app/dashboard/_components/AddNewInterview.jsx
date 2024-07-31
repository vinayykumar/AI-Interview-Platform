'use client'
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import {chatSession} from '../../../utils/GeminiAIModel'
import { Loader2 } from "lucide-react";
import {db} from '@/utils/db'
import {ai_interview_schema} from '@/utils/schema'
import {v4 as uuidv4} from 'uuid';
import { useUser } from "@clerk/nextjs";
import moment from 'moment'
import { useRouter } from "next/navigation";


function AddNewInterview() {
  const [openDialog,setOpenDialog] = useState(false);
  const [jobPosition,setJobPosition] = useState("");
  const [jobDesc,setJobDesc] = useState("");
  const [jobExperience,setJobExperience] = useState();
  const [loading,setLoading] = useState(false);
  const [jsonResponse,setJSONResponse] = useState([])
  const {user} = useUser();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // console.log(jobPosition,jobDesc,jobExperience)

    const InputPrompt = `Job Position: ${jobPosition} , Job Description: ${jobDesc} , Years of Experience: ${jobExperience} . Depend on this data provided, please generate 5 interview questions with answers in JSON Format. Give "question" and "answer" as field in JSON format.Make the fields all smallcase for consistency`

    const result = await chatSession.sendMessage(InputPrompt);
    const mockresponse = (result.response.text()).replace('```json','').replace('```','').trim();

    // console.log(JSON.parse(mockresponse))
    setJSONResponse(mockresponse);

    if(mockresponse){
      const resp = await db.insert(ai_interview_schema).values({
        mockId : uuidv4(),
        jsonMockResponse : mockresponse,
        jobPosition : jobPosition,
        jobDescription : jobDesc,
        jobExperience : jobExperience,
        createdBy :  user?.primaryEmailAddress?.emailAddress,
        createdAt : moment().format('DD-MM-yyyy')
      }).returning({mockId:ai_interview_schema.mockId})
      console.log("Inserted ID : ",resp)
      if(resp){
        setOpenDialog(false);
        router.push(`/dashboard/interview/${resp[0]?.mockId}`)
      }
    }
    else{
      console.log("An Error Occured ")
    }
    setLoading(false);
  }

  return (
    <div>
      <div onClick={()=>(setOpenDialog(!openDialog))}
        className="px-10 py-12 border rounded-lg bg-secondary hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className={"text-2xl"}>Let's get Started</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit}>
                  <div>
                    <h2>Add Details about your job position/role, Job description and years of experience. </h2>
                    {/* input container */}
                    <div className="flex flex-col gap-4 mt-5">
                        <div className="flex flex-col gap-2">
                          <label>Job Role/ Job Description</label>
                          <Input 
                            onChange={(event)=>setJobPosition(event.target.value)}
                            placeholder="Ex. FullStack Developer" required></Input>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label>Job Description/ Tech Stack</label>
                          <Textarea 
                            onChange={(event)=>setJobDesc(event.target.value)}
                            placeholder="ReactJS, NodeJS, Angular, Golang, Django" required></Textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label>Years of Experience</label>
                          <Input 
                            onChange={(event)=>setJobExperience(event.target.value)}
                            placeholder="5" type="number" max='70' required></Input>
                        </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-end mt-4">
                    <Button variant='ghost' onClick={()=>{setOpenDialog(false)}}>Cancel</Button>
                    <Button 
                      onClick={handleSubmit}
                      disabled={loading}
                      >
                        {loading? 
                          <div className="flex gap-2 justify-center items-center">
                            <Loader2 className="animate-spin"></Loader2> Generating from AI
                          </div>
                          :
                          'Start Interview'
                        }
                      </Button>
                  </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
