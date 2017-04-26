var express = require('express');
var router = express.Router();
var _ = require('lodash');
var moment = require('moment');


module.exports = function(Bookshelf){

	// --------------------------------------------------------------------------
	// ------------------------------MODELS--------------------------------------
	// --------------------------------------------------------------------------

	// Data model
	var SensorModel = Bookshelf.Model.extend({
		tableName: 'sensordaten'
	});

	var SensorCollection = Bookshelf.Collection.extend({
		model: SensorModel
	}, {
		bySensorId: function(sensor_id) {
			return this.forge().query({where:{ sensor_id: sensor_id }}).fetch();
		}
	});


	// --------------------------------------------------------------------------
	// ------------------------------REST API------------------------------------
	// --------------------------------------------------------------------------

	router.route('/:id')
	.get(function (req, res) {
		SensorCollection.bySensorId(req.params.id)
		.then(function (collection) {
			if(collection) res.send(collection.toJSON());
			else res.send('failure');
		})
	});

	router.route('')
	.get(function (req, res) {
		SensorCollection.forge().fetch()
		.then(function (collection) {
			if(collection) {
				collection = _.filter(collection.toJSON(), function (m) {
					return (moment(m.timestamp).format() > moment('2014-01-01T12:04:00+01:00').format() && moment(m.timestamp).format() < moment('2014-01-01T12:06:00+01:00').format());
				});
				res.send({length: collection.length, data: collection});
			}
			else res.send('failure');
		})
	});

	return router;
};