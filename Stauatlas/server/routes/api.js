/**
 * Created by Luise on 03.05.2017.
 */
const express = require('express');
const router = express.Router();

module.exports = function(Bookshelf){

  // User model
  let Sensordata = Bookshelf.Model.extend({
    tableName: 'sensordaten'
  });

  router.route('/getSensor')
  // fetch all users
  .get(function (req, res) {
    Sensordata.forge({sensor_id: 1080})
    .fetch()
    .then(function (collection) {
      res.send(collection.toJSON())
    })
  });

  router.route('/test')
  // fetch all users
  .get(function (req, res) {
    res.send('yey')
  });

  return router;
};
