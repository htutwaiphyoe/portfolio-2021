import nodemailer from "nodemailer";

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: "SendGrid",
        auth: {
            user: process.env.SENDGRID_USER,
            pass: process.env.SENDGRID_PASS,
        },
    });

    const mailOptions = {
        from: `Htut Wai Phyoe <${process.env.SENDER_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.body,
    };

    await transporter.sendMail(mailOptions);
};

export default sendEmail;
