import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5005/api",
});

const service = {
  getIngredientsList: () =>
    instance.get("/ingredients").then((response) => response.data),
  getRecipeList: () =>
    instance.get("/recipes").then((response) => response.data),
};

export default service;
