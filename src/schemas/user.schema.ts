import { hashSync } from "bcryptjs";
import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(127),
  email: z.string().email().max(127),
  password: z
    .string()
    .max(60)
    .transform((password) => hashSync(password, 10)),
  reset_password: z.string().max(127).nullable(),
  phone: z.string().max(15),
  user_color: z.string(),
});

const resetEmailSchema = z.object({
  to: z.string().max(127),
  subject: z.string().max(127),
  text: z.string().max(127),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  user_color: true,
  reset_password: true,
});

const userSchemaColorRequest = userSchema.omit({
  id: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchemaResetPasswordResponse = userSchema.omit({
  reset_password: true,
});

const userSchemaUpdate = userSchema
  .omit({
    id: true,
    user_color: true,
    reset_password: true,
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
};
