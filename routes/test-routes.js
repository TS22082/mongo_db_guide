const router = require("express").Router();
const { test } = require("../controllers/test-controller");

// test route
router.get("/test", test);

module.exports = router;
