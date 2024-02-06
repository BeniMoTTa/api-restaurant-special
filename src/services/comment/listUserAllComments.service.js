"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAllUserCommentsService = void 0;
const comment_schema_1 = require("../../schemas/comment.schema");
const server_1 = require("../../server");
const listAllUserCommentsService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield server_1.prisma.comment.findMany({
        where: {
            userId: userId,
        },
        include: {
            user: true,
        },
        orderBy: [
            {
                id: "asc",
            },
        ],
    });
    return comment_schema_1.manyCommentSchemaResponse.parse(comments);
});
exports.listAllUserCommentsService = listAllUserCommentsService;
