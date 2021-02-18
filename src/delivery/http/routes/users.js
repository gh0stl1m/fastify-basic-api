const { users: usersAdapter } = require('../../../adapters');

async function users(fastify) {
  fastify.get('/users', usersAdapter.getAll);
}

module.exports = users;