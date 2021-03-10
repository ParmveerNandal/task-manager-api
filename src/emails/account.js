const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: '2017uee0077@iitjammu.ac.in',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: '2017uee0077@iitjammu.ac.in',
        subject: 'Goodbye Mate!',
        text: `Thanks for staying. We will miss you, ${name}. Could you please let us know, why did you cancelled?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}