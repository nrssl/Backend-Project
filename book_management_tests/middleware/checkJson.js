module.exports = function(req, res, next) {
  if (req.headers['content-type'] !== 'application/json') {
    return res.status(400).send('Server requires application/json');
  }
  next();
};