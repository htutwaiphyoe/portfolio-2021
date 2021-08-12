import nc from "next-connect";
import xss from "xss-clean";
import helmet from "helmet";

import connectDB from "@/config/dbConfig";
import globalErrorHandler from "@/middlewares/globalErrorHandler";
import { createMessage } from "@/controllers/messageController";

const handler = nc({ onError: globalErrorHandler });

connectDB();

handler.use(helmet()).use(xss()).post(createMessage);

export default handler;
