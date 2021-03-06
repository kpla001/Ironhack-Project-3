import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.spoonacular.com',
})

const apiService = {
  getRecipesFromApi: input =>
    instance
      .get(
        `/recipes/complexSearch?query=${input}&number=50&instructuionRequired=true&addRecipeInformation=true&apiKey=${process.env.REACT_APP_INGREDIENT_API_KEY}`,
      )
      .then(response => response),

  getRandomRecipeFromApi: input =>
    instance
      .get(`/recipes/random?number=5&apiKey=${process.env.REACT_APP_API_KEY5}`)
      .then(response => response),

  getRecipeDetailsFromApi: input =>
    instance
      .get(
        `/recipes/${input.match.params.id}/information?includeNutrition=true&apiKey=${process.env.REACT_APP_API_KEY6}`,
      )
      .then(response => response),
}

export default apiService
