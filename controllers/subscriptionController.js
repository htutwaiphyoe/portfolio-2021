import Subscription from "@/models/Subscription";
import catchAsyncError from "@/middlewares/catchAsyncError";
import sendEmail from "@/mail/email";

export const createSubscription = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;

    await Subscription.create({
        email,
        createdAt: Date.now(),
    });

    await sendEmail({
        email: "htutwaiphyoe@gmail.com",
        subject: "New subscription",
        body: `${email} is subscribed for new blog. Send him email now.`,
    });

    res.status(201).json({
        status: "success",
        message: "Thanks for your subscription.",
    });
});
