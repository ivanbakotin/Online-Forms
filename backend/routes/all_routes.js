const express = require("express");
const router = express.Router();
const form_controllers = require("../controllers/form_controllers");

// FORM ROUTES
router.get("/get_forms", form_controllers.get_forms);

router.post("/create_form", form_controllers.create_form);

router.post("/get_form_info", form_controllers.get_form_info);

router.post("/update_form_main", form_controllers.update_form_main);

router.post("/update_form_questions", form_controllers.update_form_questions);

module.exports = router;
