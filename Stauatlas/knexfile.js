/**
 * Created by alex.hans on 05.05.2017.
 */

module.exports = {


  local: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'masterprojektgeschwindigkeitsdaten',
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  
  development: {
    client: 'mysql',
    connection: {
      host: 'db.hosting-agency.de',
      user: 'dbuser30796',
      password: process.env.db_password,
      database: 'db6107x1',
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'us-cdbr-iron-east-03.cleardb.net',
      user: 'bb41eedfd379a8',
      password: process.env.clearDB_password,
      database: 'heroku_9b6f95eb7a9adf8',
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
