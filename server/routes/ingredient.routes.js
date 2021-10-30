const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("These are my ingredients")
})

module.exports = router;