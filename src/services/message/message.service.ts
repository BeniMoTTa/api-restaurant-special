import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class MessageService {
  async getMessageByOption(option: string): Promise<string | null> {
    try {
      const message = await prisma.message.findOne({
        where: { option },
      });

      return message?.content || null;
    } catch (error) {
      console.error("Error retrieving message:", error);
      throw new Error("Internal Server Error");
    }
  }
}
