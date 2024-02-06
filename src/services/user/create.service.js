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
exports.createUserService = void 0;
const server_1 = require("../../server");
const user_schema_1 = require("../../schemas/user.schema");
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const colors = [
            "#349974",
            "#000080",
            "#34D8AC",
            "#D3D3D3",
            "#F5F5DC",
            "#654321",
            "#FFC0CB",
            "#C8A2C8",
            "#DC143C",
            "#FF91A4",
            "#FFBF00",
            "#B2FFFF",
            "#40E0D0",
            "#006400",
            "#FF7256",
        ];
        const randomIndex = Math.floor(Math.random() * colors.length);
        data.user_color = colors[randomIndex];
        data.reset_password = "";
        const user = yield server_1.prisma.users.create({
            data,
        });
        const formattedUser = user_schema_1.userSchemaResponse.parse(user);
        return formattedUser;
    }
    catch (error) {
        console.error("Erro na criação do usuário:", error);
        throw error;
    }
});
exports.createUserService = createUserService;
