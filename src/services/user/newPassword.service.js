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
exports.newPasswordService = void 0;
const bcryptjs_1 = require("bcryptjs");
const server_1 = require("../../server");
const errors_1 = require("../../errors/errors");
const newPasswordService = (password, resetToken) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield server_1.prisma.users.findFirst({
        where: {
            reset_password: resetToken,
        },
    });
    if (!user) {
        throw new errors_1.AppError("user not found", 404);
    }
    yield server_1.prisma.users.update({
        where: {
            id: user.id,
        },
        data: {
            password: (0, bcryptjs_1.hashSync)(password, 10),
            reset_password: "",
        },
    });
});
exports.newPasswordService = newPasswordService;
