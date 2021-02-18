const { usersUseCases } = require('../useCases');

async function getAll() {
  return usersUseCases.getAll();
}

module.exports = {
  getAll,
}