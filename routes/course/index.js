var express = require('express');
var router = express.Router();


router.use("/tagSearch", require("./tagSearch"));
router.use("/like", require("./like"));

module.exports = router;