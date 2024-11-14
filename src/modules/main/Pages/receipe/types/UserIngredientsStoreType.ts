export interface Ingredient {
  name: string;
  value: string;
}

export interface IngredientStore {
  ingredients: Ingredient[];
  addIngredientField: () => void;
  clearAllIngredientFields: () => void;
  clearIngredientField: (index: number) => void;
  handleIngredientChange: (index: number, value: string) => void;
}
