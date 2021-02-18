import start from './delivery/http/server.js';

start()
  .then(() => console.log("Server running"))
  .catch(err => console.log("Something went wrong: ", err.message));
