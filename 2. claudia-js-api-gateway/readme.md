# Using API gateway to trigger lambda
This project demonstrates how to deploy AWS Lambda which is triggered by API call through API Gateway using Claudia JS

Deploying code to AWS is as simple as running this command `claudia create --region us-west-2 --api-module index`.
Or in this case you can run `npm start` and choose task from menu.
After finished deployment claudia will print out API Gateway endpoint which you can use to call lambda code.

Lambda exposes 2 endpoints:
- `/hello` which responds with static text
- `/greet?name=tomekbielaszewski` which responds with dynamic text based on given parameter 

Based on: https://claudiajs.com/tutorials/hello-world-api-gateway.html