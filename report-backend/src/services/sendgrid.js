const sgMail = require('@sendgrid/mail')
const config = require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sender = process.env.SENDGRID_VERIFIED_SENDER;

async function sendEmail(recipient, attachment, reportTime) {
    const base64Attachment = Buffer.from(attachment).toString('base64');
    const msg = {
        to: recipient,
        from: sender,
        subject: 'lighthouse report',
        text: `Lighthouse report created at ${reportTime}`,
        attachments: [
            {
              content: base64Attachment,
              filename: "report.html",
              type: "text/html",
              disposition: "attachment"
            }
          ]
    }
    sgMail.send(msg);
}

module.exports = { 
    sendEmail 
};