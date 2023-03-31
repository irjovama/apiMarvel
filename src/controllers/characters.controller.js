const service = require('../services/characters.service');

exports.getCharacters = async (req, res) => {
  try {
    const result = await service.getCharacters(req.query);
    res.status(200).json(result);
  } catch (err) {
    res.status(err.response.data.code).json({ error: err.response.data.status });
  }
};

exports.getCharById = async (req, res) => {
  try {
    const result = await service.getCharById(req.query, req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(err.response.data.code).json({ error: err.response.data.status });
  }
};


exports.getItems = async (req, res) => {
  try {
    const result = await service.getComicsByItem(req.query, req.params.id, req.params.item);
    res.status(200).json(result);
  } catch (err) {
    res.status(err.response.data.code).json({ error: err.response.data.status });
  }
};
