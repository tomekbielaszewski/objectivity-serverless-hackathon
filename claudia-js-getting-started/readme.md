## Claudia JS getting started
This sub-project is first trial of ClaudiaJS and I will describe here what was needed to make it work.
Lambda responds to the empty event with "Hello world!" but when you provide a name in your event - i will use this name to greet you. Example event.json:
```
{
	"name": "tomekbielaszewski"
}
```
(22.09.2017)

- Install AWS CLI
- Configure AWS CLI
	- Go to AWS Console - IAM
	- Open Users from menu on the left - add user
	- Choose username, check "Programmatic access", click next
	- Create Group and choose following 3 policies:
		- AWSLambdaFullAccess
		- IAMFullAccess
		- AmazonAPIGatewayAdministrator
	- Click next, create user and copy your accessKey and secretKey TO THE SAFE PLACE!!
	- Open console on your computer and type `aws configure` and follow instructions
- Deploy lambda by running `claudia create --region us-west-2 --handler index.handler` from directory where you see `package.json`
- Test your lambda running this command `claudia test-lambda --event event.json` where `event.json` is file with data passed to function in it's context object
- Updating lambda: run `claudia update`
- Logs: to inspect logs of your lambda go to `Lambda` in `AWS Console`, find your lambda by name, open `Monitoring` tab and click CloudWatch