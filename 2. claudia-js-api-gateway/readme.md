# Using API gateway to trigger lambda
This project demonstrates how to deploy AWS Lambda which is triggered by API call through API Gateway using Claudia JS

Deploying code to AWS is as simple as running this command `claudia create --region us-west-2 --api-module index`.
After finished deployment claudia will print out API Gateway endpoint which you can use to call lambda code.

Lambda exposes 2 endpoints:
- `/hello` which responds with static text
- `/greet?name=tomekbielaszewski` which responds with dynamic text based on given parameter 