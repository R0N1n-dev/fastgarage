// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

// Enable the fastify CORS plugin
fastify.register(require("fastify-cors"), {
  origin: "*",
  credentials: true,
});

// Require external modules
const mongoose = require("mongoose");

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost/cargarageFS")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

module.exports = fastify;
