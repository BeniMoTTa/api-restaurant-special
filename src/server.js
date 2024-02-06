"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const app_1 = require("./app");
const port = 3000;
const prisma = new client_1.PrismaClient({ log: ["info", "query", "warn", "error"] });
exports.prisma = prisma;
app_1.app.listen(port, () => console.log(`Server is running in: http://localhost:${port}`));
