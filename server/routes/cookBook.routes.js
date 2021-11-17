const router = require("express").Router();
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const CookBook = require("../models/cookbook/CookBook");
const User = require("../models/user/User.model");
const Recipe = require("../models/recipe/Recipe");
const mongoose = require("mongoose");

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
  // console.log("Req Body: ", req.body)
    CookBook.create(req.body)
    .then((cookbookFromDb) => {
<<<<<<< HEAD
      console.log("Line 32 ----------------", cookbookFromDb);

      CookBook.findByIdAndUpdate(
        cookbookFromDb._id,
        cookbookFromDb._id ? null : { $push: { recipes: req.body.recipes } },
        { new: true }
      )
        .then((updatedCookBookWithRecipes) => {
          console.log("Line 36 ----------------", updatedCookBookWithRecipes);
=======
      // console.log(cookbookFromDb.recipes);
        if (cookbookFromDb.recipes.length < 1) {
            CookBook.findByIdAndUpdate(
                cookbookFromDb._id,
                cookbookFromDb._id ? null : { $push: { recipes: req.body.recipes } },
                { new: true }
            )
                .then((updatedCookBookWithRecipes) => {
                    // console.log("Line 39 ----------------", updatedCookBookWithRecipes);
>>>>>>> d90bfeab06d4fabebc013f7538ecba68826256a9

                    const preparedAuthorId = mongoose.Types.ObjectId(req.body.author);
                    User.findByIdAndUpdate(
                    preparedAuthorId,
                    { $push: { cookbooks: updatedCookBookWithRecipes._id } },
                    { new: true }
                    )
                    // .populate('cookbooks')
                    .then((updatedUserWithCookBook) => {
                        // console.log("Line 49 ----------------", updatedUserWithCookBook);

                        User.findById(updatedUserWithCookBook._id)
                        .populate({ path: "cookbooks", model: "CookBook" })
                        .then((populatedObject) => {
                            res
                            .status(200)
                            .json({ cookbooks: populatedObject.cookbooks });
                        })
                        .catch((err) => res.json({ errorMessage: err }));
                    })
                    .catch((err) => res.json({ errorMessage: err }));
                })
        } else{
            const preparedAuthorId = mongoose.Types.ObjectId(req.body.author);
            User.findByIdAndUpdate(
                preparedAuthorId,
                { $push: { cookbooks: cookbookFromDb._id} },
                { new: true }
            )
            .then((cookbookFromDb) => {
                // console.log("Line 70 ----------------", cookbookFromDb);

                User.findById(cookbookFromDb._id)
                .populate({ path: "cookbooks", model: "CookBook" })
                .then((populatedObject) => {
                    res
                    .status(200)
                    .json({ cookbooks: populatedObject.cookbooks });
                });
            })
            .catch((err) => res.json({ errorMessage: err }))
        }
    })
    .catch((err) => res.json({ errorMessage: err}))
});

router.get("/:id", (req, res, next) => {
  CookBook.findById(req.params.id)
    .then((cookbookToDb) => res.status(200).json({ cookbook: cookbookToDb }))
    .catch((err) => res.json({ errorMessage: err }));
});

router.post("/:id", (req, res, next) => {
  console.log(req.body);
  CookBook.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((cookbookToUpdate) =>
      res.status(200).json({ cookbook: cookbookToUpdate })
    )
    .catch((err) => res.json({ errorMessage: err }));
});

router.delete("/:id", (req, res, next) => {
  CookBook.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.json({ errorMessage: err }));
});

module.exports = router;
