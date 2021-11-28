const express = require("express");
const router = express.Router();
const form_controllers = require("../controllers/form_controllers");

// FORM ROUTES
router.get("/get_forms", form_controllers.get_forms);

router.post("/create_form", form_controllers.create_form);

router.post("/update_form_main", form_controllers.update_form_main);

router.post("/update_form_questions", form_controllers.update_form_questions);

router.post("/get_form_info", form_controllers.get_form_info);

router.delete("/delete_question", form_controllers.delete_question);

router.delete("/delete_quest_sub", form_controllers.delete_quest_sub);

router.delete("/delete_form", form_controllers.delete_form);

module.exports = router;
