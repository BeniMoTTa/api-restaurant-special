"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const errors_1 = require("../errors/errors");
const ensureAuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        throw new errors_1.AppError("Missing bearer token", 401);
    }
    const splitToken = token.split(" ")[1];
    jsonwebtoken_1.default.verify(splitToken, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new errors_1.AppError("Invalid token", 401);
        }
        res.locals.userId = decoded.sub;
        return next();
    });
};
exports.ensureAuthMiddleware = ensureAuthMiddleware;
