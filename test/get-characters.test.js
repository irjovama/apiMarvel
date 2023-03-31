const service = require('../src/services/service');
test('The response code should be 200 when requesting characters without a query.', async () => {
    const req = {
        query: {},
        params: {
            endpoint: "characters",
        },
    }
    const response = await service.getData(req);
    expect(response.data.code).toBe(200);
});


test('The response code should be 200 when requesting stories  without a query.', async () => {
    const req = {
        query: {},
        params: {
            endpoint: "stories",
        },
    }
    const response = await service.getData(req);
    expect(response.data.code).toBe(200);
});

test('The response code should be 200 when requesting characters order by name.', async () => {
    const req = {
        query: {
            orderBy: "name",
        },
        params: {
            endpoint: "characters",
        },
    }
    const response = await service.getData(req);
    expect(response.data.code).toBe(200);
});




test('The response data count should be 3 when requesting characters with ?limit=3.', async () => {
    const req = {
        query: {
            limit: "3",
        },
        params: {
    
            endpoint: "characters",
        },
    }
    const response = await service.getData(req);
    expect(response.data.data.count).toBe(3);
});


test('The response data count should be 1 when requesting characters', async () => {
    const req = {
        query: {
            orderBy: "name",
        },
        params: {
            id: 1011334,
            endpoint: "characters",
        },
    }
    const response = await service.getDataById(req);
    expect(response.data.data.count).toBe(1);
});