// NOTE: This example uses the next generation Twilio helper library - for more
// information on how to download and install this version, visit
// https://www.twilio.com/docs/libraries/node
const apiKeySid = 'SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const apiKeySecret = 'your_api_key_secret';
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const Twilio = require('twilio');

const client = new Twilio(apiKeySid, apiKeySecret, { accountSid: accountSid });

client.video.rooms
  .create({
    uniqueName: 'DailyStandupWithH264Codec',
    type: 'group',
    videoCodecs: 'H264',
    statusCallback: 'http://example.org',
  })
  .then(room => {
    console.log(room.sid);
  });
