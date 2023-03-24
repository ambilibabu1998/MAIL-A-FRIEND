const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'ambili.babu.sheeba@gmail.com', // your email address
        pass: 'ldbkgpchniwmmuck' // your email password
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"AMBILI BABU" <ambili.babu.sheeba@gmail.com>', // sender address
    to: 'ambilibabu1998@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello Ammu? Hope you are doing well', // plain text body
    html: '<b>Hello Ammu?Hope you are doing well</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});

