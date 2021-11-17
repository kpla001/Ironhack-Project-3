const router = require("express").Router();
const authRoutes = require("./auth");
const cookBookRoutes = require("./cookBook.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);

router.use("/cookbooks", cookBookRoutes);

module.exports = router;
