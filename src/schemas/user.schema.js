"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCommentsResponse = exports.manyUserResponse = exports.userSchemaResetPasswordResponse = exports.resetEmailSchema = exports.userSchemaUpdate = exports.userSchemaResponse = exports.userSchemaColorRequest = exports.userSchemaRequest = exports.userSchema = void 0;
const zod_1 = require("zod");
const comment_schema_1 = require("./comment.schema");
const userSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(127),
    email: zod_1.z.string().email().max(127),
    password: zod_1.z.string().max(60),
    reset_password: zod_1.z.string().max(127).nullable(),
    phone: zod_1.z.string().max(30),
    user_color: zod_1.z.string(),
    photo: zod_1.z.string(),
});
exports.userSchema = userSchema;
const userSchemaResponse = userSchema.omit({
    password: true,
});
exports.userSchemaResponse = userSchemaResponse;
const resetEmailSchema = zod_1.z.object({
    to: zod_1.z.string().max(127),
    subject: zod_1.z.string().max(127),
    text: zod_1.z.string().max(127),
});
exports.resetEmailSchema = resetEmailSchema;
const userCommentsResponse = zod_1.z.object({
    comments: zod_1.z.array(comment_schema_1.commentSchemaResponse),
});
exports.userCommentsResponse = userCommentsResponse;
const userSchemaRequest = userSchema.omit({
    id: true,
    user_color: true,
    reset_password: true,
});
exports.userSchemaRequest = userSchemaRequest;
const userSchemaColorRequest = userSchema.omit({
    password: true,
    reset_password: true,
});
exports.userSchemaColorRequest = userSchemaColorRequest;
const manyUserResponse = zod_1.z.array(userSchemaColorRequest);
exports.manyUserResponse = manyUserResponse;
const userSchemaResetPasswordResponse = userSchema.omit({
    reset_password: true,
});
exports.userSchemaResetPasswordResponse = userSchemaResetPasswordResponse;
const userSchemaUpdate = userSchema
    .omit({
    id: true,
    user_color: true,
    reset_password: true,
    comments: true,
})
    .partial();
exports.userSchemaUpdate = userSchemaUpdate;
