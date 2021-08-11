import nc from "next-connect";

import connectDB from "@/config/dbConfig";
import globalErrorHandler from "@/middlewares/globalErrorHandler";
import { createMessage } from "@/controllers/messageController";

const handler = nc({ onError: globalErrorHandler });

connectDB();

handler.post(createMessage);

export default handler;
