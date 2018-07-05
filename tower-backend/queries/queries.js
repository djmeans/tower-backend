
var knex = require('../connection')

module.exports = {
  getRegionById: function (id) {
    return knex('regions').where('id', id).returning('*')
  },
  getRegionByCountry: function (email) {
    return knex('regions').select().where('region', region).returning('*')
  },
  getAllVarietals: function () {
    return knex('varietals').returning('*')
  },
  getVarietalByVarietal: function(varietal){
    return knex('varietals').select().where('varietal', varietal).returning('*')
  },
  getAllRegions: function () {
    return knex('regions').returning('*')
  },

  create(body) {
    return (
        knex('varietals').insert(body)
    )
  },
  updateBallot(req) {
    return knex('myballot').where('id', req.userId).update(req.body).returning('*')
  },

  delete(id) {
    return knex('varietals').where('id', id).del()
  }

};
