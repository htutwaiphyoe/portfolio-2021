import Message from "@/models/Message";
import catchAsyncError from "@/middlewares/catchAsyncError";
import sendEmail from "@/mail/email";

export const createMessage = catchAsyncError(async (req, res, next) => {
    const { name, email, message } = req.body;

    await Message.create({
        name,
        email,
        message,
        createdAt: Date.now(),
    });

    await sendEmail({
        email: "htutwaiphyoe@gmail.com",
        subject: "New message",
        body: `${email} is sent message to you.`,
    });

    res.status(201).json({
        status: "success",
        message: "Thanks for your message.",
    });
});
