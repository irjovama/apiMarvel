import { Controller, Get, Param } from '@nestjs/common';
import {  Query } from '@nestjs/common/decorators';
import { MarvelApi } from 'src/marvel-api/marvel-api.service';
import { ApiQuery } from '@nestjs/swagger/dist';
@Controller('api/v1/:endpoint')
export class MarvelController {
    constructor(private readonly MarvelApi: MarvelApi) {}
    @Get()
    @ApiQuery({ required: false, name: 'orderBy', type: 'string', description: 'Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.' })
    @ApiQuery({ required: false, name: 'limit', type: 'integer', description: 'Limit the result set to the specified number of resources.' })
    @ApiQuery({ required: false, name: 'offset', type: 'string', description: 'Skip the specified number of resources in the result set.' })
    async findAll(@Query() queryParams: any, @Param('endpoint') endpoint: string): Promise<any> {
        return this.MarvelApi.getData(queryParams, endpoint);
    }
    @Get(':id')
    @ApiQuery({ required: false, name: 'orderBy', type: 'string', description: 'Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.' })
    @ApiQuery({ required: false, name: 'limit', type: 'integer', description: 'Limit the result set to the specified number of resources.' })
    @ApiQuery({ required: false, name: 'offset', type: 'string', description: 'Skip the specified number of resources in the result set.' })
    async findId(@Query() queryParams: any, @Param('endpoint') endpoint: string, @Param('id') id: string): Promise<any> {
        return this.MarvelApi.getDataId(queryParams, endpoint, id);
    }
    @Get(':id/:item')
    @ApiQuery({ required: false, name: 'orderBy', type: 'string', description: 'Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.' })
    @ApiQuery({ required: false, name: 'limit', type: 'integer', description: 'Limit the result set to the specified number of resources.' })
    @ApiQuery({ required: false, name: 'offset', type: 'string', description: 'Skip the specified number of resources in the result set.' })
    async findIdItem(@Query() queryParams: any, @Param('endpoint') endpoint: string, @Param('id') id: string, @Param('item') item: string): Promise<any> {
        return this.MarvelApi.getDataIdItem(queryParams, endpoint, id, item);
    }
}
