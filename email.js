const nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
             host: "sandbox.smtp.mailtrap.io",
             port: 2525,
             auth: {
                 user: "",
                 pass: ""
             }
     })


message = {
    from: "from-example@email.com",
    to: "to-example@email.com",
    subject: "Subject",
    text: "Hello SMTP1 Email",
    // html: "<h1>Hello SMTP Email</h1>"
}

transporter.sendMail(message, function(err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log(info);
    } 
})

