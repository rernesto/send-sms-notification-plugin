// Description
// Send a single SMS

exports.handler = function(context, event, callback) {
    // Make sure under Functions Settings tab:
    // "Add my Twilio Credentials (ACCOUNT_SID) and (AUTH_TOKEN) to ENV" is CHECKED

    const twilioClient = context.getTwilioClient();

    const response = new Twilio.Response();
    response.appendHeader('Access-Control-Allow-Origin', '*');
    response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Pass in From, To, and Body as query parameters
    // Example: https://x.x.x.x/<path>?From=%2b15095550100&To=%2b15105550100&Body=Hello%20World
    // Note URL encoding above
    let from = event.From || '+15095550100';
    // If passing in To, make sure to validate, to avoid sending SMS to unexpected locations
    let to = event.To || '+15105550100';
    let body = event.Message || 'Hello World!';

    twilioClient.messages
        .create({
            body: body,
            to: to,
            from: from,
        })
        .then((message) => {
            console.log('SMS successfully sent');
            console.log(message.sid);
            response.appendHeader('Content-Type', 'application/json');
            response.setBody(message);
            return callback(null, response);
        })
        .catch((error) => {
            console.log(error);
            response.appendHeader('Content-Type', 'plain/text');
            response.setBody(error.message);
            response.setStatusCode(500);

            return callback(error);
        });
}