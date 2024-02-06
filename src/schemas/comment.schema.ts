import { z } from "zod";

const commentSchema = z.object({
  id: z.number(),
  content: z.string().max(512),
  userId: z.number(),
  edited: z.boolean(),
  createdAt: z.date(),
  editedAt: z.date().nullable(),
});

const commentSchemaResponse = commentSchema.extend({
  user: z.object({
    id: z.number(),
    name: z.string(),
    user_color: z.string(),
    photo: z.string(),
  }),
  userId: z.number().nullable(),
  editedAt: z.date().nullish(),
});

const commentSchemaRequest = commentSchema.omit({
  id: true,
});

const manyCommentSchemaResponse = z.array(commentSchemaResponse);

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
