const https = require('https'),
      path = require('path'),
      prettyjson = require('prettyjson');

const apiBase = 'churchmetrics.com',
      credentials = require('./credentials.json');

const pageSize = 5,
      dataDir = path.resolve(__dirname, 'data/');

console.log(`Email is: ${credentials.email}`);

var options = {
  host: apiBase,
  path: '/api/v1/users.json',
  headers: {
    "X-Auth-User": credentials.email,
    "X-Auth-Key": credentials.key
  }
};

async function writeObjectToFile(obj, fileName) {
  console.log(path.resolve(dataDir, fileName));
}

async function doQuery(path) {
  options.path = path;

  return new Promise((resolve, reject) => {
    https.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + prettyjson.render(res.headers));
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        resolve(chunk);
      });
    }).end();
  });
}

async function main() {
  let msg = await doQuery('/api/v1/users.json')
  console.log(prettyjson.render(JSON.parse(msg)));
  // console.log(dataDir);
  await writeObjectToFile(msg, 'users.json');


  // doQuery(`/api/v1/records.json?per_page=${pageSize}`).then((msg) => {
  //   console.log(prettyjson.render(JSON.parse(msg)));
  // });
}

main();