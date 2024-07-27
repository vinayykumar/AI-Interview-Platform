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
// import { ChatSession,sendMessage } from "@google/generative-ai";
import {chatSession} from '../../../utils/GeminiAIModel'


function AddNewInterview() {
  const [openDialog,setOpenDialog] = useState(false);
  const [jobPosition,setJobPosition] = useState("");
  const [jobDesc,setJobDesc] = useState("");
  const [jobExperience,setJobExperience] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(jobPosition,jobDesc,jobExperience)
    const InputPrompt = `Job Position: ${jobPosition} , Job Description: ${jobDesc} , Years of Experience: ${jobExperience} . Depend on this data provided, please generate 5 interview questions with answers in JSON Format. Give Question and answers as field in JSON format`

    const result = await chatSession.sendMessage(InputPrompt);
    console.log(result.response.text());
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
            <DialogTitle className="text-2xl">Let's get Started</DialogTitle>
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
                    <Button onClick={handleSubmit}>Start Interview</Button>
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
