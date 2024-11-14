import { create } from 'zustand';
import { IngredientStore } from '../types/UserIngredientsStoreType';

export const useIngredientStore = create<IngredientStore>((set) => ({
  ingredients: [{ name: 'ingredient1', value: '' }],

  addIngredientField: () =>
    set((state) => ({
      ingredients: [
        ...state.ingredients,
        { name: `ingredient${state.ingredients.length + 1}`, value: '' },
      ],
    })),

  clearAllIngredientFields: () =>
    set({ ingredients: [{ name: 'ingredient1', value: '' }] }),

  clearIngredientField: (index) =>
    set((state) => ({
      ingredients:
        state.ingredients.length > 1
          ? state.ingredients.filter((_, i) => i !== index)
          : state.ingredients,
    })),

  handleIngredientChange: (index, value) =>
    set((state) => ({
      ingredients: state.ingredients.map((ingredient, i) =>
        i === index ? { ...ingredient, value } : ingredient,
      ),
    })),
}));
