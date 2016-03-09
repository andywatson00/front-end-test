module.exports = function(app) {
  var express     = require('express');
  var postsRouter = express.Router();

  postsRouter.post('/create', function(req, res)
  {
    if (req.body.contactName === '' || req.body.contactEmail === '' || req.body.contactMessage === '')
    {
      es.status(400).send('{ "message": "Invalid Message Data. Please try again." }');
    }
    else
    {
      res.status(200).send('{ "message": "Message recieved. Thank you." }');
    }
  });


  app.use('/posts', postsRouter);
};
