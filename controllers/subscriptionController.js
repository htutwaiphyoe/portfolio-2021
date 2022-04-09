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

Thanks for your subscription. You'll receive an email whenever a new blog or series is uploaded. For old blogs, you can find them on my website.`,
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
  const { body, subject } = req.body;

  if (subscribers.length > 0) {
    subscribers.forEach(async (s) => {
      await sendEmail({
        email: s.email,
        subject,
        body,
      });
    });
  }

  res.status(200).json({
    status: "success",
    subscribers,
    message: "Emails are sent successfully!",
  });
});
