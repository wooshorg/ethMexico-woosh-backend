const express = require("express");
const router = express.Router();

const { bind, retrieve } = require("../controllers/User");

router.route("/bind").post(bind);
router.route("/retrieve/:address").get(retrieve);

module.exports = router;
