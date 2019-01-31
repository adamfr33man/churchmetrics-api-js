const https = require('https'),
      querystring = require('querystring'),
      path = require('path'),
      prettyjson = require('prettyjson');
      const apiBase = 'churchmetrics.com';

const pageSize = 5,
      dataDir = path.resolve(__dirname, 'data/');

class Utils {
  constructor(credentials, debug = true) {
    this.credentials = credentials;
    this.debug = true;

    this.options = {
      host: apiBase,
      port: 443,
      headers: {
        'X-Auth-User': credentials.email,
        'X-Auth-Key': credentials.key
      }
    };
  }

  async httpGET(path) {
    let options = {
      ...this.options,
      'path': path
    };

    return new Promise((resolve, reject) => {
      https.request(options, function(res) {
        if(this.debug) {
          console.log('STATUS: ' + res.statusCode);
          console.log('HEADERS: ' + prettyjson.render(res.headers));
        }
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
          resolve(chunk);
        });
      }).end();
    });
  }

  async httpPOST(path, data) {
    let postData = JSON.stringify(data);
    let options = {
      ...this.options, 
      'path': path,
      'method': 'POST',
      headers: {
        ...this.options.headers,
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    };
  
    return new Promise((resolve, reject) => {
      let req = https.request(options, function(res) {
        if(true) {
          console.log('REQUEST: ' + prettyjson.render(options));
          console.log('DATA: ' + postData);
          console.log('STATUS: ' + res.statusCode);
          console.log('HEADERS: ' + prettyjson.render(res.headers));
        }
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
          resolve(chunk);
        });
      });
      req.write(postData);
      req.end();
    });
  }

  async httpPUT(path, data) {
    let postData = JSON.stringify(data);
    let options = {
      ...this.options, 
      'path': path,
      'method': 'PUT',
      headers: {
        ...this.options.headers,
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    };
  
    return new Promise((resolve, reject) => {
      let req = https.request(options, function(res) {
        if(true) {
          console.log('REQUEST: ' + prettyjson.render(options));
          console.log('DATA: ' + postData);
          console.log('STATUS: ' + res.statusCode);
          console.log('HEADERS: ' + prettyjson.render(res.headers));
        }
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
          resolve(chunk);
        });
      });
      req.write(postData);
      req.end();
    });
  }

  async writeObjectToFile(obj, fileName) {
    console.log(path.resolve(dataDir, fileName));
  }
}

module.exports = Utils;