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
exports.updateCommentService = void 0;
const server_1 = require("../../server");
const comment_schema_1 = require("../../schemas/comment.schema");
const updateCommentService = (data, commentId) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedComments = yield server_1.prisma.comment.update({
        where: { id: commentId },
        data: Object.assign(Object.assign({}, data), { edited: true }),
        include: {
            user: true,
        },
    });
    return comment_schema_1.commentSchemaResponse.parse(updatedComments);
});
exports.updateCommentService = updateCommentService;
