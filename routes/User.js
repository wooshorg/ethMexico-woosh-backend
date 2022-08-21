const express = require("express");
const router = express.Router();

const { bind, retrieve, edit } = require("../controllers/User");

router.route("/bind").post(bind);
router.route("/retrieve/:address").get(retrieve);
router.route("/edit/:address").put(edit);

module.exports = router;
