const express = require("express");
const router = express.Router();
const auth_controllers = require('../controllers/auth_controllers')

router.post("/register", auth_controllers.register);

router.post("/login", auth_controllers.login);

router.get("/logout", auth_controllers.logout);

router.get("/islog", auth_controllers.islog);

module.exports = router;
