const router = require("express").Router();
const CookBook = require("../models/cookbook/CookBook");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const Ingredient = require("../models/ingredient/Ingredient");
const Recipe = require("../models/recipe/Recipe");
const Cookbook = require("../models/cookbook/CookBook");
// const Recipe = require("../models/Recipe.model");

router.get(
  "/",
  // isLoggedin,
  (req, res) => {
    CookBook.find()
      .populate("author")
      .populate("recipes")
      .then((cookbooksFromDb) => {
        console.log(cookbooksFromDb);
        res.status(200).json({ cookbooks: cookbooksFromDb });
      })
      .catch((err) => {
        console.log(err);
        res.json({ errorMessage: err });
      });
  }
);

router.post("/", (req, res, next) => {
  let cookbookIdArr = [];

  req.body.cookbook.forEach((cookbook, i) => {
    Cookbook.findOne({ name: cookbook.name }).then((cookbookFromDb) => {
      if (cookbookFromDb !== null) {
      }
      Cookbook.create(cookbook)
        .then((cookbookFromDb) => {
          cookbookIdArr.push(cookbookFromDb._id);
        })
        .catch((err) => console.log(err));
    });
    if (i === req.body.cookbook.length - 1) {
      checkCookbook();
    }
  });

  function checkCookbook() {
    Cookbook.findOne({ spoonacularId: req.body.spoonacularId }).then(
      (cookbookFromDb) => {
        if (cookbookFromDb !== null) {
          res.json(cookbookFromDb);
        } else {
          Cookbook.create({ ...req.body, cookbook: cookbookIdArr })
            .then((cookbookToDb) => {
              res.status(200).json({ cookbook: cookbookToDb });
            })
            .catch((err) => {
              console.error(err);
            });
        }
      }
    );
  }

  Cookbook.create(req.body)
    .then((cookbookToDb) => res.status(200).json({ cookbook: cookbookToDb }))
    .catch((err) => res.json({ errorMessage: err }));
});

router.get("/:id", (req, res, next) => {
  Cookbook.findById(req.params.id)
    .then((cookbookToDb) => res.status(200).json({ cookbook: cookbookToDb }))
    .catch((err) => res.json({ errorMessage: err }));
});

router.post("/:id", (req, res, next) => {
  Cookbook.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((cookbookToUpdate) =>
      res.status(200).json({ cookbook: cookbookToUpdate })
    )
    .catch((err) => res.json({ errorMessage: err }));
});

router.delete("/:id", (req, res, next) => {
  Cookbook.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.json({ errorMessage: err }));
});

module.exports = router;
