import { z } from "zod";

import { messageSchema, messageSchemaRequest } from "../schemas/message.schema";

export type TMessage = z.infer<typeof messageSchema>;

export type TMessageRequest = z.infer<typeof messageSchemaRequest>;
