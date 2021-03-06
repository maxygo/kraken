// Ref: http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    app = express(),
    port = 7777,
    router = express.Router(),
    webAppDir = createSystemFileName('../../public/'),
    apiRouterPrefix = '/api';

// given a file name path relative to this directory, create an absolute path
function createSystemFileName(fileName) {
    return path.resolve(path.join(__dirname, fileName));
}

// only log requests to the API:
router.use(morgan('dev'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// currently, we are fixed to the dev distribution:
app.use(express.static(webAppDir));
// configure router to handle specific prefix in the path
app.use(apiRouterPrefix, router);
app.listen(port);

console.log('Web app dir:', webAppDir);
console.log('Logging only service API calls');
console.log('Open browser at: http://127.0.0.1:' + port + '/');