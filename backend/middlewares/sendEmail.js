// const nodeMailer = require("nodemailer");

// exports.sendEmail = async (options) => {
//   const transporter = nodeMailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "211d4679e3d79c",
//       pass: "9e2b7d43009e26",
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMPT_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };

const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
      service: process.env.SMPT_SERVICE,
      secure: false,
    });

    let info = await transporter.sendMail({
      from: process.env.SMPT_HOST, // sender address
      to: options.email, // list of receivers
      subject: options.subject, // Subject line
      text: options.message, // html body
    });
    console.log(info.response);
    return info;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
