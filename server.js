const fastify = require("fastify")({
  logger: true,
});

fastify.register(require("./config/db"));
fastify.register(require("fastify-cors"));

const routes = require("./routes/userRoutes");
routes.forEach((route, index) => {
  fastify.route(route);
});

const start = async () => {
  try {
    const PORT = 3001;
    await fastify.listen(PORT, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
