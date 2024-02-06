"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSchemaUpdate = exports.manyCommentSchemaResponse = exports.commentSchemaResponse = exports.commentSchemaRequest = exports.commentSchema = void 0;
const zod_1 = require("zod");
const commentSchema = zod_1.z.object({
    id: zod_1.z.number(),
    content: zod_1.z.string().max(512),
    userId: zod_1.z.number(),
    edited: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    editedAt: zod_1.z.date().nullable(),
});
exports.commentSchema = commentSchema;
const commentSchemaResponse = commentSchema.extend({
    user: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        user_color: zod_1.z.string(),
        photo: zod_1.z.string(),
    }),
    userId: zod_1.z.number().nullable(),
    editedAt: zod_1.z.date().nullish(),
});
exports.commentSchemaResponse = commentSchemaResponse;
const commentSchemaRequest = commentSchema.omit({
    id: true,
});
exports.commentSchemaRequest = commentSchemaRequest;
const manyCommentSchemaResponse = zod_1.z.array(commentSchemaResponse);
exports.manyCommentSchemaResponse = manyCommentSchemaResponse;
const commentSchemaUpdate = commentSchema
    .omit({
    id: true,
    userId: true,
})
    .partial();
exports.commentSchemaUpdate = commentSchemaUpdate;
