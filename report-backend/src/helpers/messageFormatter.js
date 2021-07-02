const badRequestError = () => 
    `check input params: url, interval and email are required`;
const badTypeError = () => 
    `check input params type: interval`;
const success = (url, email, interval) => 
    `report for ${url} has been scheduled and will be sent to ${email} every ${interval} seconds`;

module.exports = {
    badRequestError,
    badTypeError,
    success
}
