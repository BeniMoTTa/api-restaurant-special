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
exports.updateUserController = void 0;
const update_service_1 = require("../../services/user/update.service");
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    const updatedValues = req.body;
    const updatedUser = yield (0, update_service_1.updateUserService)(updatedValues, userId);
    return res.json(updatedUser);
});
exports.updateUserController = updateUserController;