import Fastify from "fastify";

async function start() {
  const fastify = Fastify();

  fastify.get('/', () => ({ status: "Running" }));
  fastify.get('/linda', () => {
    return {
      message: "Linda es la mujer que mas quiero en el universo y es mi vida",
    }
  });
  fastify.get('/linda/hermosa', () => {
    return {
      message: "Linda es la mujer que mas feliz me hace",
    }
  })

  try {
    await fastify.listen(3000);
    
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start()
  .then(() => console.log("Server running"))
  .catch(err => console.log("Something went wrong: ", err.message));
