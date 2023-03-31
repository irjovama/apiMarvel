const service = require('../services/service');

exports.getData = async (req, res) => {
  
  try {
    const result = await service.getData(req);
    res.status(result.data.code).json(result.data);
  } catch (err) {
    res.status(err.response.status).json({ error: err.response.statusText });
  }
    
};

exports.getDataById = async (req, res) => {
  try {
    const result = await service.getDataById(req);
    res.status(result.data.code).json(result.data);
  } catch (err) {
    res.status(err.response.status).json({ error: err.response.statusText });
  }
};


exports.getItems = async (req, res) => {
  try {
    const result = await service.getItems(req);
    res.status(result.data.code).json(result.data);
  } catch (err) {
    res.status(err.response.status).json({ error: err.response.statusText });
  }
};
