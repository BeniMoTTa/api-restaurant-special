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
exports.listAllUserCommentsController = void 0;
const listUserAllComments_service_1 = require("../../services/comment/listUserAllComments.service");
const listAllUserCommentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = +req.params.id;
    const comments = yield (0, listUserAllComments_service_1.listAllUserCommentsService)(userId);
    return res.json(comments);
});
exports.listAllUserCommentsController = listAllUserCommentsController;
