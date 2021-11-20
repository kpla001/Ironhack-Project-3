import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const service = {
  ///GET Routes///
  getIngredientsList: () =>
    instance.get("/ingredients").then((response) => response.data),

  getRecipeList: () =>
    instance.get("/recipes").then((response) => response.data),

  getCookbookList: () =>
    instance.get("/cookbooks").then((response) => response.data),

  getUserCookBooksById: (userId) =>
    instance.get(`/users/${userId}`).then((response) => response.data),

  findOneUserCookBook: (userId, cookbookId) =>
    instance
      .get(`/users/${userId}/${cookbookId}`)
      .then((response) => response.data),

  /// POST Routes ///
  saveRecipe: (recipe) => instance.post("/recipes", recipe),

  saveRecipeToCookBook: (recipe, cookbookId) =>
    instance.post(`/cookbooks/${cookbookId}`, recipe),

  saveRecipeToUserCookBook: (recipe, userId, cookbookId) =>
    instance.post(`/users/${userId}/${cookbookId}`, recipe),

  ///Delete Service Route //////////////////////////////////
  deleteCookbook: (cookbookId) => instance.delete(`/cookbooks/${cookbookId}`),
};

export default service;
