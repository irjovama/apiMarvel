import { Injectable } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
@Injectable()
export class AppService {
  getHello(): string {
    return `
    <h1>Marvel API</h1>
    <a href='/api/v1/characters'>Go to Characters</a><br>
    <a href='/api-docs/v1/'>Go to Documentation</a><br>
    <a href='/health'>Go to health endpoint</a>
    `;
  }
  @HttpCode(200)
  async getHealth(): Promise<any> {
    return { "status": "ok", "code": '200' };
  }
}


