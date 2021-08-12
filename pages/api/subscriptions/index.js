import nc from "next-connect";
import xss from "xss-clean";
import helmet from "helmet";

import connectDB from "@/config/dbConfig";
import globalErrorHandler from "@/middlewares/globalErrorHandler";
import { createSubscription } from "@/controllers/subscriptionController";

const handler = nc({ onError: globalErrorHandler });

connectDB();

handler.use(helmet()).use(xss()).post(createSubscription);

export default handler;
