const { success, badRequestError, badTypeError } = require('../helpers/messageFormatter');
const { generateReportAndSendEmail } = require('../services/generateReport');

function indexController(req, res) {
    res.send('ok')
};

async function generateReportAndSendEmailController(req, res) {
    const { url, interval, email } = req.body;
    if (!url || !interval || !email) {
        return res.status(400).json({ error: badRequestError()});
    }
    if ( typeof interval !== 'number') {
        return res.status(400).json({ error: badTypeError()});
    }
    generateReportAndSendEmail(url, email)
    setInterval(() => generateReportAndSendEmail(url, email), interval)
    res.status(200).send({ 
        status: 'scheduled', 
        message: success(url, email, interval)
    })
}

module.exports = {
    indexController,
    generateReportAndSendEmailController
}