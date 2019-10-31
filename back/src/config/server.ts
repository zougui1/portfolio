import express from 'express';
import fs from 'fs';
import http from 'http';
import https from 'https';
import { debug } from './debug';

const app = express();
let server: http.Server | https.Server;
let _http: http.Server;
let _https: https.Server | undefined;
let options: any = {};
const port = 6000;

// use of https module with SSL when in production
// use of http module when not in production
if (process.env.NODE_ENV === 'production') {
  debug.server('Creation of an HTTPS server');
  const privateKey = fs.readFileSync(process.env.CERT_PATH + 'privkey.pem').toString();
  const certificate = fs.readFileSync(process.env.CERT_PATH + 'fullchain.pem').toString();
  const ca = fs.readFileSync(process.env.CERT_PATH + 'cert.pem').toString();

  options = {
    key: privateKey,
    cert: certificate,
    ca: ca,
  };

  _https = new https.Server(options, app);
  _https.listen(port + 1, () => debug.server(`https listening on port %o`, port + 1));
}

// create a server that will send the build
_http = new http.Server(app);
_http.listen(port, () => debug.server(`http listening on port %o`, port));

server = _https || _http

export {
  server,
  express,
  app,
  port,
};
