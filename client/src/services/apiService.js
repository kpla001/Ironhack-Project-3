import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spoonacular.com",
});

const apiService = {
 
  getRecipesFromApi: (input) =>
    instance.get(`/recipes/complexSearch?query=${input}&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`).then((response) => response),
 
};

export default apiService;