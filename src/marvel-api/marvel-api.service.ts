import { Injectable } from '@nestjs/common';
import * as http from 'http';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class MarvelApi {
  private apiUrl = 'https://gateway.marvel.com';
  private auth = '?ts='+process.env.TIME_STAMP+'&apikey='+process.env.API_KEY+'&hash='+process.env.HASH;
  private queryFormat(params: object): String {
    let query = [];
    for(let k in params){
      query.push(`${k}=${params[k]}`);
    }
    return query.join("&");
  }
  async getData(queryParams: any, endpoint: string): Promise<any> {
    const options = {
      host: 'gateway.marvel.com',
      path: '/v1/public/'+endpoint+''+this.auth+'&'+this.queryFormat(queryParams),
      headers: {  },
    };

    return new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(JSON.parse(data));
        });
      });

      req.on('error', (err) => {
        reject(err);
      });

      req.end();
    });
  }


  async getDataId(queryParams: any, endpoint: string, id: string): Promise<any> {
    const options = {
      host: 'gateway.marvel.com',
      path: '/v1/public/'+endpoint+'/'+id+''+this.auth+'&'+this.queryFormat(queryParams),
      headers: {  },
    };

    return new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(JSON.parse(data));
        });
      });

      req.on('error', (err) => {
        reject(err);
      });

      req.end();
    });
  }


  async getDataIdItem(queryParams: any, endpoint: string, id: string, item: string): Promise<any> {
    const options = {
      host: 'gateway.marvel.com',
      path: '/v1/public/'+endpoint+'/'+id+'/'+item+''+this.auth+'&'+this.queryFormat(queryParams),
      headers: {  },
    };

    return new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(JSON.parse(data));
        });
      });

      req.on('error', (err) => {
        reject(err);
      });

      req.end();
    });
  }
}
