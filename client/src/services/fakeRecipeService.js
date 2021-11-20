export const recipes = [
  { _id: '5b21ca3eeb7f6fbccd471818', name: 'Cookbook' },
  { _id: '5b21ca3eeb7f6fbccd471814', name: 'Recipes' },
  { _id: '5b21ca3eeb7f6fbccd471820', name: 'Favorites' },
]

export function getRecipes() {
  return recipes.filter(g => g)
}
