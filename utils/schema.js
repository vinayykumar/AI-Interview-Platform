import { pgTable , serial, text, varchar} from "drizzle-orm/pg-core";

export const ai_interview_schema = pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResponse:text('jsonMockResponse').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDescription:varchar('jobDescription').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
    mockId:varchar('mockId').notNull()
})