const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const { sendEmail } = require('./sendgrid');

async function generateReportAndSendEmail(url, email) {
  try {
      const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
      const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
      const runnerResult = await lighthouse(url, options);
      const reportHtml = runnerResult.report;
      const reportTime = runnerResult.lhr.fetchTime;
      sendEmail(email, reportHtml, reportTime)
      await chrome.kill();
    } catch (error) {
      console.log('generateReportAndSendEmail error', error);
      if (chrome) {
        await chrome.kill();
      }
    }
}

module.exports = { 
  generateReportAndSendEmail
};