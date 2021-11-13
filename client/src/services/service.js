import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5005/api",
});

const service = {
  ///GET Routes///
  getIngredientsList: () =>
    instance.get("/ingredients").then((response) => response.data),
  getRecipeList: () =>
    instance.get("/recipes").then((response) => response.data),
  getCookbookList: () =>
    instance.get("/cookbooks").then((response) => response.data),
  /// POST Routes ///
  postRecipeToDb: (recipe) => instance.post("/recipes", recipe),
  
  
};

export default service;
