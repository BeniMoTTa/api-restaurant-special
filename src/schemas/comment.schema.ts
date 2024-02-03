import { z } from "zod";

const commentSchema = z.object({
  id: z.number(),
  content: z.string().max(512),
  userId: z.number(),
  edited: z.boolean().optional(),
  created_at: z.date(),
  updated_at: z.date(),
});

const commentSchemaRequest = commentSchema.omit({
  id: true,
});

const commentSchemaResponse = commentSchema.extend({
  user: z.object({
    id: z.number(),
    name: z.string(),
    user_color: z.string(),
    photo: z.string(),
  }),
});

const manyCommentSchemaResponse = z.array(commentSchema);

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
  manyCommentSchemaResponse,
  commentSchemaUpdate,
};
