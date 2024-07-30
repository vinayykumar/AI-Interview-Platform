"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [feedBackList, setFeedBackList] = useState([]);
  const router = useRouter();
  
  const getFeedBack = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    console.log(result);
    setFeedBackList(result);
  };
  
  useEffect(() => {
    getFeedBack();
  }, []);


  return (
    <div className="p-10">

      {feedBackList?.length == 0 ? (
          <h2 className="font-bold text-xl text-gray-500">
          No Interview Feedback Record Found
        </h2>
      ) : (
          <>
          <h2 className="text-2xl font-bold text-green-500">Congratulations</h2>
          <h2 className="font-bold text-2xl">Here is your inerview feedback</h2>
          <h2 className="text-primary text-lg my-3">
            Your overall interview rating : <strong>7/10</strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Find below the interview question with correct answer, your answer
            and feedback for improvement.
          </h2>

          {feedBackList &&
            feedBackList.map((item, index) => (
              <Collapsible key={index} className="flex flex-col gap-2 mt-4">
                <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex gap-2 justify-between w-full">
                  {item.question}{" "}
                  <ChevronsUpDown className="h-5 w-5"></ChevronsUpDown>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-yellow-400 p-2 border rounded-lg">
                      <strong>Rating :</strong>
                      {item.rating}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-red-50 text-red-900">
                      <strong>Your Answer :</strong>
                      {item.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-50 text-green-900">
                      <strong>Correct Answer :</strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-blue-50 text-blue-900">
                      <strong>Feedback :</strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <Button onClick={() => router.replace("/dashboard")} className="mt-8">
        Go to Dashboard
      </Button>
    </div>
  );
}

export default Feedback;
