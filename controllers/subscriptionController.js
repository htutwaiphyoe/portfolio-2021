import absoluteUrl from "next-absolute-url";

import Subscription from "@/models/Subscription";
import catchAsyncError from "@/middlewares/catchAsyncError";
import sendEmail from "@/mail/email";

export const createSubscription = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;

    await Subscription.create({
        email,
        createdAt: Date.now(),
    });
    const { origin } = absoluteUrl(req);
    const link = `${origin}/blogs`;

    await sendEmail({
        email,
        subject: "Welcome to my channel.",
        body: `Thanks for subscribing. You'll receive a newsletter whenever a new blog is uploaded. For old blogs, you can read them here ${link}`,
    });

    await sendEmail({
        email: "htutwaiphyoe@gmail.com",
        subject: "New subscription",
        body: `${email} is subscribed to my personal website.`,
    });

    res.status(201).json({
        status: "success",
        message: "Thanks for your subscription.",
    });
});
