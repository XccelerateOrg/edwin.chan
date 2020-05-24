let config = require('./myApp/knexfile')["development"]

module.exports = require('knex')(config)