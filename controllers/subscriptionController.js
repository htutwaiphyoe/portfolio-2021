import Subscription from "@/models/Subscription";
import catchAsyncError from "@/middlewares/catchAsyncError";

export const createSubscription = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;
    
    await Subscription.create({
        email,
        createdAt: Date.now(),
    });

    res.status(201).json({
        status: "success",
        message: "Thanks for your subscription.",
    });
});
