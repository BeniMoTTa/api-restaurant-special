import { z } from "zod";

const messageSchema = z.object({
  id: z.number(),
  content: z.string(),
  userId: z.number(),
  created_at: z.date(),
});

const messageSchemaRequest = messageSchema.omit({
  id: true,
});

export { messageSchema, messageSchemaRequest };
