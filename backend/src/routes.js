const express = require("express");
const Devcontroller = require("./Controllers/DevController");
const LikeController = require("./Controllers/LikeController");
const DislikeController = require("./Controllers/DislikeController");

const routes = express.Router();

routes.get('/devs',Devcontroller.index);
routes.post('/devs',Devcontroller.store);
routes.post('/devs/:devId/likes',LikeController.store);
routes.post('/devs/:devId/dislikes',DislikeController.store);

module.exports = routes;