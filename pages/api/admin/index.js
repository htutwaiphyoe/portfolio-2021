import nc from "next-connect";

import connectDB from "@/config/dbConfig";
import globalErrorHandler from "@/middlewares/globalErrorHandler";
import { sendMailToSubscribers } from "@/controllers/subscriptionController";

const handler = nc({ onError: globalErrorHandler });

connectDB();

handler.post(sendMailToSubscribers);

export default handler;
