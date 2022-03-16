const express = require("express");
const router = express.Router();
const auth_controllers = require("../controllers/auth_controllers");
const fillout_controllers = require("../controllers/fillout_controllers");

router.post("/register", auth_controllers.register);

router.post("/login", auth_controllers.login);

router.get("/logout", auth_controllers.logout);

router.get("/islog", auth_controllers.islog);

router.post("/send_filled_form", fillout_controllers.send_filled_form);

router.post("/get_form_info", fillout_controllers.get_form_info);

module.exports = router;
