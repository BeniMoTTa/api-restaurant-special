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
exports.createCommentController = void 0;
const create_service_1 = require("../../services/comment/create.service");
const createCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commentData = req.body;
    const userId = Number(res.locals.userId);
    const newComment = yield (0, create_service_1.createCommentService)(commentData, userId);
    return res.status(201).json(newComment);
});
exports.createCommentController = createCommentController;
