// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var authToken = "{{ auth_token }}";
var client = require('twilio')(accountSid, authToken);

client.sms.shortCodes.list({ shortCode: "898" }, function(err, data) {
    data.shortCodes.forEach(function(shortCode) {
        console.log(shortCode.SmsMethod);
    });
});