# Simple chatbot deployed using claudiaJS

This project implements very simple chatbot which always responds with excuses.

Deployment is made as always with simple command `claudia create --region us-west-2 --api-module index` or just choose option from menu `npm start`

But this needs additional configuration for successfull integration with one of supported chat services.
I've chosen Slack but you can easly integrate this chatbot with any of following services: Facebook, Telegram, Skype, Twilio, Kik, GroupMe, Line, Viber, Alexa.

After deployment simply run `claudia update --configure-slack-slash-app` after some time claudia will ask you for a few keys which you can generate [here](https://api.slack.com/apps?new_app=1)

In response from claudia update you will find several URLs which are needed to set up your new chatbot on slack. In this case we will create Slack `Slash command`.

On slack.api page choose `Slash commands`, click `Create New Command` and then fill it as follows
Command: /test
RequestURL: [slackSlashCommand from claudia update response]
Short description: my test app

click Save and your custom slack command is up and running!

Based on: https://claudiajs.com/tutorials/hello-world-chatbot.html