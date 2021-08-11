import nc from "next-connect";

import connectDB from "@/config/dbConfig";
import globalErrorHandler from "@/middlewares/globalErrorHandler";
import { createSubscription } from "@/controllers/subscriptionController";

const handler = nc({ onError: globalErrorHandler });

connectDB();

handler.post(createSubscription);

export default handler;
