# Proxy api with claudia JS deployment

Proxy API is very useful when deploying fully pledged NodeJS Express apps. You can expose single common endpoint for every endpoint in app. 

For example API Gateway exposes proxy API on URL:

https://xyz.aws.com/my-app/

and under this proxy you can have a single app with many mappings:

https://xyz.aws.com/my-app/endpoint1
https://xyz.aws.com/my-app/endpoint2
https://xyz.aws.com/my-app/endpoint3?my-param=my-value

Deployment is very simple as always, just tun `claudia create --region us-west-2 --deploy-proxy-api --handler index.handler`