import * as recipesAPI from './fakeRecipeService'

const cookbooks = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    title: 'Holiday',
    recipe: { _id: '5b21ca3eeb7f6fbccd471818' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: '2018-01-03T19:04:28.809Z',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471816',
    title: 'Grilling',
    recipe: { _id: '5b21ca3eeb7f6fbccd471818' },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471817',
    title: 'Italian',
    recipe: { _id: '5b21ca3eeb7f6fbccd471820' },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471819',
    title: 'Cardamom Maple Salmon',
    recipe: { _id: '5b21ca3eeb7f6fbccd471814' },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181a',
    title: 'Spicy Port Tenderloin',
    recipe: { _id: '5b21ca3eeb7f6fbccd471814' },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181b',
    title: 'Low Carb Turkey Stuffed Pepper',
    recipe: { _id: '5b21ca3eeb7f6fbccd471814' },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181e',
    title: 'Cannabis',
    recipe: { _id: '5b21ca3eeb7f6fbccd471820' },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181f',
    title: 'Vegan',
    recipe: { _id: '5b21ca3eeb7f6fbccd471820' },
    numberInStock: 4,
    dailyRentalRate: 4.5,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471821',
    title: 'Fried Only',
    recipe: { _id: '5b21ca3eeb7f6fbccd471818' },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
]

export function getCookbooks() {
  return cookbooks
}

export function getCookbook(id) {
  return cookbooks.find(m => m._id === id)
}

export function saveCookbook(book) {
  let bookInDb = cookbooks.find(m => m._id === book._id) || {}
  bookInDb.name = book.name
  bookInDb.recipe = recipesAPI.recipes.find(g => g._id === book.genreId)
  bookInDb.numberInStock = book.numberInStock
  bookInDb.dailyRentalRate = book.dailyRentalRate

  if (!bookInDb._id) {
    bookInDb._id = Date.now()
    cookbooks.push(bookInDb)
  }

  return bookInDb
}

export function deleteCookbook(id) {
  let bookInDb = cookbooks.find(m => m._id === id)
  cookbooks.splice(cookbooks.indexOf(bookInDb), 1)
  return bookInDb
}
