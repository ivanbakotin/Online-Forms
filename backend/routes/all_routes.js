const express = require("express");
const router = express.Router();
const form_controllers = require("../controllers/form_controllers");

// FORM ROUTES
router.get("/get_forms", form_controllers.get_forms);

router.post("/create_form", form_controllers.create_form);

module.exports = router;
