import { z } from "zod";

const commentSchema = z.object({
  id: z.number(),
  content: z.string().max(512),
  userId: z.number(),
});

const commentSchemaRequest = commentSchema.omit({
  id: true,
});

const commentSchemaResponse = commentSchema.omit({
  userId: true,
});

const commentSchemaUpdate = commentSchema
  .omit({
    id: true,
    userId: true,
  })
  .partial();

export {
  commentSchema,
  commentSchemaRequest,
  commentSchemaResponse,
  commentSchemaUpdate,
};
