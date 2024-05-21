import { z } from 'zod';


export const AcceptingFeedbackSchema = z.object({
    acceptingfeedback: z.boolean()
})