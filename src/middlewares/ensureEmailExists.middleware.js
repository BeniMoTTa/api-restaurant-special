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
exports.ensureEmailExistsMiddleware = void 0;
const server_1 = require("../server");
const errors_1 = require("../errors/errors");
const ensureEmailExistsMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (email) {
        const user = yield server_1.prisma.users.findFirst({
            where: {
                email,
            },
        });
        if (user) {
            throw new errors_1.AppError("Email already exists", 409);
        }
    }
    return next();
});
exports.ensureEmailExistsMiddleware = ensureEmailExistsMiddleware;
