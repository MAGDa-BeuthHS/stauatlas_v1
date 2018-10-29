/**
 * Created by Luise on 03.05.2017.
 */
const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('masterprojektgeschwindigkeitsdaten', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false  // I don't want timestamp fields by default
  },

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
.authenticate()
.then(function(err) {
  console.log('Connection has been established successfully.');
})
.catch(function (err) {
  console.log('Unable to connect to the database:', err);
});

// Sensordata model
let SensorModel = sequelize.define('sensor_data', {
  sensor_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  speed: {
    type: Sequelize.FLOAT
  },
  timestamp: {
    type: Sequelize.DATE,
    primaryKey: true
  }
});

/* GET api listing. */
router.get('/', (req,res) => {
  console.log(1234);
  res.send('api works');
});
// Get all tempolimits
router.get('/tempolimits', (req, res) => {
  SensorModel.findAll({
    where: {
      sensor_id: 1080,
      speed: {
        gt: 95
      }
    },
    limit: 1000
  })
  .then(function(col) {
    if(col) {
      console.log(col.length);
      res.send(col)
    } else {
      res.send('error')
    }
  })
});


module.exports = router;
