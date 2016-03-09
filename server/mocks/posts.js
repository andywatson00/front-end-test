module.exports = function(app) {
  var express     = require('express');
  var postsRouter = express.Router();

  postsRouter.post('/create', function(req, res) {
    if (req.body.token_type_hint === 'access_token' || req.body.token_type_hint === 'refresh_token') {
      res.status(200).end();
    } else {
      res.status(400).send('{ "error": "unsupported_token_type" }');
    }
  });


  app.use('/posts', postsRouter);
};
