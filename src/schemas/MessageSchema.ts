import { z } from 'zod';


export const FeedbackSchema = z.object({
    content: z.string().min(10, "Content must be atleast 10").max(1000, "Content must be atmost 1000")
})