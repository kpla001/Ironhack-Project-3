import * as recipesAPI from "./fakeGenreService";

const cookbooks = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Holiday",
    recipe: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cookbook" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Grilling",
    recipe: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cookbooks" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Italian",
    recipe: { _id: "5b21ca3eeb7f6fbccd471820", name: "Favorites" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Cuban",
    recipe: { _id: "5b21ca3eeb7f6fbccd471814", name: "Recipes" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Mexican",
    recipe: { _id: "5b21ca3eeb7f6fbccd471814", name: "Recipes" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Bake",
    recipe: { _id: "5b21ca3eeb7f6fbccd471814", name: "Recipes" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Cannabis",
    recipe: { _id: "5b21ca3eeb7f6fbccd471820", name: "Favorites" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Vegan",
    recipe: { _id: "5b21ca3eeb7f6fbccd471820", name: "Favorites" },
    numberInStock: 4,
    dailyRentalRate: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Fried Only",
    recipe: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cookbooks" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
];

export function getCookbooks() {
  return cookbooks;
}

export function getCookbook(id) {
  return cookbooks.find((m) => m._id === id);
}

export function saveCookbook(book) {
  let bookInDb = cookbooks.find((m) => m._id === book._id) || {};
  bookInDb.name = book.name;
  bookInDb.recipe = recipesAPI.recipes.find((g) => g._id === book.genreId);
  bookInDb.numberInStock = book.numberInStock;
  bookInDb.dailyRentalRate = book.dailyRentalRate;

  if (!bookInDb._id) {
    bookInDb._id = Date.now();
    cookbooks.push(bookInDb);
  }

  return bookInDb;
}

export function deleteCookbook(id) {
  let bookInDb = cookbooks.find((m) => m._id === id);
  cookbooks.splice(cookbooks.indexOf(bookInDb), 1);
  return bookInDb;
}
