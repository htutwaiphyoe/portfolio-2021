import mongoose from "mongoose";

const connectDB = async function () {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    try {
        let dbString = process.env.DB_STRING.replace("<username>", process.env.DB_USER).replace(
            "<password>",
            process.env.DB_PASS
        );
        await mongoose.connect(dbString, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.error(err);
    }
};

export default connectDB;
