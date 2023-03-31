const axios = require('axios');
require('dotenv').config();
const crypto = require('crypto');

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;

const BASE_URL = 'http://gateway.marvel.com/v1/public/';
const endpoint = "characters";


const ts = 1;
const hash = crypto.createHash('md5').update(ts+privateKey+publicKey).digest('hex');
const params = {
  ts: ts,
  apikey: publicKey,
  hash: hash
}
const auth = new URLSearchParams(params).toString();


///exports
exports.getCharacters = async (query) => {
  const q = new URLSearchParams(query).toString();
  const response = await axios.get(`${BASE_URL}/${endpoint}?${auth}&${q}`);
  return response.data;
};

exports.getCharById = async (query, id) => {
  const q = new URLSearchParams(query).toString();
  const response = await axios.get(`${BASE_URL}/${endpoint}/${id}?${auth}&${q}`);
  return response.data;
}

exports.getItems = async (query, id, item) => {
  const q = new URLSearchParams(query).toString();
  const response = await axios.get(`${BASE_URL}/${endpoint}/${id}/${item}?${auth}&${q}`);
  return response.data;
}
