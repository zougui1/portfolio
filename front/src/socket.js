import openSocket from 'socket.io-client';

const isProd = process.env.NODE_ENV === 'production';

let url = isProd ? 'http://93.188.165.130' : 'http://localhost';
let port = isProd ? 6001 : 6000;

export default openSocket(url + ':' + port, { secure: true });
