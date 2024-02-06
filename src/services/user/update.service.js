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
exports.updateUserService = void 0;
const errors_1 = require("../../errors/errors");
const user_schema_1 = require("../../schemas/user.schema");
const server_1 = require("../../server");
const updateUserService = (data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (data.email) {
        const oldUser = yield server_1.prisma.users.findUnique({
            where: {
                email: data.email,
            },
        });
        if ((oldUser === null || oldUser === void 0 ? void 0 : oldUser.email) == data.email) {
            delete data.email;
        }
        else {
            const user = yield server_1.prisma.users.findFirst({
                where: {
                    email: data.email,
                },
            });
            if (user) {
                throw new errors_1.AppError("Email already exists", 409);
            }
        }
    }
    const userUpdated = yield server_1.prisma.users.update({
        where: { id: userId },
        data: Object.assign({}, data),
    });
    return user_schema_1.userSchemaResponse.parse(userUpdated);
});
exports.updateUserService = updateUserService;
