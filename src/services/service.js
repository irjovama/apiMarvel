const axios = require('axios');
require('dotenv').config();
const crypto = require('crypto');

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;

const BASE_URL = 'http://gateway.marvel.com/v1/public/';



const ts = 1;
const hash = crypto.createHash('md5').update(ts+privateKey+publicKey).digest('hex');
const params = {
  ts: ts,
  apikey: publicKey,
  hash: hash
}
const auth = new URLSearchParams(params).toString();


///exports
exports.getData = async (req) => {
  const q = new URLSearchParams(req.query).toString();
  const response = await axios.get(`${BASE_URL}/${req.params.endpoint}?${auth}&${q}`);
  return response;
};

exports.getDataById = async (req) => {
  const q = new URLSearchParams(req.query).toString();
  const response = await axios.get(`${BASE_URL}/${req.params.endpoint}/${req.params.id}?${auth}&${q}`);
  return response;
};

exports.getItems = async (req) => {

  const q = new URLSearchParams(req.query).toString();
  const response = await axios.get(`${BASE_URL}/${req.params.endpoint}/${req.params.id}/${req.params.item}?${auth}&${q}`);
  return response;
};
