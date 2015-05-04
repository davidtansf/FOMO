var eventController = require('./eventController.js');


module.exports = function (app) {

  app.get('/event/:id', eventController.getEvent);

  app.post('/triggerevent', eventController.eventPlaceHolder);

  app.post('/addevent', eventController.addEvent);

  app.get('/triggerevent', eventController.triggerEvent);

  app.get('/myevents', eventController.myEvents);

  app.get('/topevents', eventController.eventPlaceHolder);

  app.get ('/search', eventController.searchEvents);
};
