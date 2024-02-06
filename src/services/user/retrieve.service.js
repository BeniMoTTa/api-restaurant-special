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
exports.retrieveUserService = void 0;
const server_1 = require("../../server");
const user_schema_1 = require("../../schemas/user.schema");
const retrieveUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield server_1.prisma.users.findMany({
            orderBy: [
                {
                    id: "asc",
                },
            ],
            include: {
                comments: true,
            },
        });
        const usersWithComments = users.map((user) => (Object.assign(Object.assign({}, user), { comments: user.Comment || [] })));
        return user_schema_1.manyUserResponse.parse(usersWithComments);
    }
    catch (error) {
        console.error("Erro na validação do usuário:", error);
        throw error;
    }
});
exports.retrieveUserService = retrieveUserService;
