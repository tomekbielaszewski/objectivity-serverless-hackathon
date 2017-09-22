const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

// Lambda will host our app, so embedded server is no longer needed
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!')
// });

// In order to proxy requests from lambda to express we need to export the express app
module.exports = app;