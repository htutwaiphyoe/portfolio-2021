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
        email,
        subject: "Welcome to my channel.",
        body: `Hi there,

Thanks for subscribing. You'll receive a newsletter whenever a new blog or series is uploaded. For old blogs, you can find them in website.`,
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

export const sendMailToSubscribers = catchAsyncError(async (req, res, next) => {
    const subscribers = await Subscription.find({}, { email: 1, _id: 0 });
    const { blog } = req.body;

    if (subscribers.length > 0) {
        subscribers.forEach(async (s) => {
            await sendEmail({
                email: s.email,
                subject: "New blog",
                body: `Dear subscriber,

Weekend blog about ${blog.title} is uploaded. Read it here https://www.htutwaiphyoe.me/blogs/${blog.slug}`,
            });
        });
    }

    res.status(200).json({
        status: "success",
        subscribers,
        blog,
        message: "Emails are sent successfully!",
    });
});
