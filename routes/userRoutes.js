const userController = require("../controllers/userController");
// const fastifyPlugin = require("fastify-plugin");

const routes = [
  {
    method: "GET",
    url: "/api/users",
    handler: userController.getAllUsers,
  },
  {
    method: "GET",
    url: "/api/users/:id",
    handler: userController.getSingleUser,
  },
  {
    method: "POST",
    url: "/api/users/new",
    handler: userController.createUser,
  },
  {
    method: "PUT",
    url: "/api/users/:id",
    handler: userController.updateUser,
  },
  {
    method: "POST",
    url: "/api/users/verify",
    handler: userController.verifyUser,
  },
];
module.exports = routes;
