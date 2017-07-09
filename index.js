const https = require('https'),
  apiBase = 'churchmetrics.com',
  credentials = require('./credentials.json');

console.log(`Email is: ${credentials.email}`);

var options = {
  host: apiBase,
  path: '/api/v1/users.json',
  headers: {
    "X-Auth-User": credentials.email,
    "X-Auth-Key": credentials.key
  }
};

function doQuery(path) {
  options.path = path;

  return new Promise((resolve, reject) => {
    https.request(options, function(res) {
      // console.log('STATUS: ' + res.statusCode);
      // console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        resolve(chunk);
      });
    }).end();
  });
}

doQuery('/api/v1/users.json').then((msg) => {
  console.log(msg);
});