import mongoose from "mongoose";
import validator from "validator";
import timeZone from "mongoose-timezone";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        minLength: [5, "Name is too short."],
        maxLength: [20, "Name is too long."],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter your email address"],
        validate: [validator.isEmail, "Please enter valid email address"],
        trim: true,
        lowercase: true,
    },
    message: {
        type: String,
        required: [true, "Please enter your message"],
        minLength: [10, "Message is too short."],
        maxLength: [100, "Message is too long."],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

messageSchema.plugin(timeZone);

export default mongoose.models.Message || mongoose.model("Message", messageSchema);
