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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokenService = void 0;
const server_1 = require("../../server");
const errors_1 = require("../../errors/errors");
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createTokenService = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield server_1.prisma.users.findFirst({
        where: {
            email,
        },
    });
    console.log(user === null || user === void 0 ? void 0 : user.password);
    if (!user) {
        throw new errors_1.AppError("Invalid credentials", 403);
    }
    if (password.toString() !== user.password.toString()) {
        throw new errors_1.AppError("Invalid credentials", 403);
    }
    const token = jsonwebtoken_1.default.sign({ email: user.email }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRES_IN,
        subject: user.id.toString(),
    });
    return { token: token, user_id: user.id };
});
exports.createTokenService = createTokenService;
