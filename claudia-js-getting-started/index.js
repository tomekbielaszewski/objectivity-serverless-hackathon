exports.handler = function (event, context) {
	console.log(event);
	if(event.name) {
		context.succeed('hello ' + event.name);
	} else {
		context.succeed('hello world');
	}
};