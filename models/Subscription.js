import mongoose from "mongoose";
import validator from "validator";
import uniqueValidator from "mongoose-unique-validator";

const subscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter your email address"],
        unique: true,
        validate: [validator.isEmail, "Please enter valid email address"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

subscriptionSchema.plugin(uniqueValidator, { message: "You are already subscribed." });

export default mongoose.models.Subscription || mongoose.model("Subscription", subscriptionSchema);
