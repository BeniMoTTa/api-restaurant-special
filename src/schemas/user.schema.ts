import { hashSync } from "bcryptjs";
import { z } from "zod";
import { commentSchema, commentSchemaResponse } from "./comment.schema";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(127),
  email: z.string().email().max(127),
  password: z.string().max(60),
  reset_password: z.string().max(127).nullable(),
  phone: z.string().max(30),
  user_color: z.string(),
  photo: z.string(),
});

const userSchemaResponse = userSchema.omit({
  password: true,
});
const resetEmailSchema = z.object({
  to: z.string().max(127),
  subject: z.string().max(127),
  text: z.string().max(127),
});

const userCommentsResponse = z.object({
  comments: z.array(commentSchemaResponse),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  user_color: true,
  reset_password: true,
});

const userSchemaColorRequest = userSchema.omit({
  password: true,
  reset_password: true,
});

const manyUserResponse = z.array(userSchemaColorRequest);

const userSchemaResetPasswordResponse = userSchema.omit({
  reset_password: true,
});

const userSchemaUpdate = userSchema
  .omit({
    id: true,
    user_color: true,
    reset_password: true,
    comments: true,
  })
  .partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaColorRequest,
  userSchemaResponse,
  userSchemaUpdate,
  resetEmailSchema,
  userSchemaResetPasswordResponse,
  manyUserResponse,
  userCommentsResponse,
};
