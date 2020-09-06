const { default: fastify } = require("fastify");
const fastifyPlugin = require("fastify-plugin");
const mongoose = require("mongoose");

async function dbConnector(fastify, options) {
  try {
    const url = "mongodb://127.0.0.1:27017/mydb";
    const db = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
    // fastify.decorate("mongo", db);
  } catch (error) {
    fastify.log.error(error);
  }
}
module.exports = fastifyPlugin(dbConnector);
