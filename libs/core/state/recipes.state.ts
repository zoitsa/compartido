import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRecipes from '@compartido/core/state/recipes.reducer';
import { environment } from '@compartido/core';

export namespace RecipesState {
  /**
   * Interface for 'recipes' state
   */
  export interface State {
    recipes: fromRecipes.recipeReducer.State;
  }

  /**
   * You can define other interfaces as needed here
   */

  export const initialState: State = {
    recipes: fromRecipes.recipeReducer.initialState
  };

  export const reducers: ActionReducerMap<State> = {
    recipes: fromRecipes.recipeReducer.reducer
  };

  export const selectRecipeState = (state: State) => state.recipes;

  export const selectRecipeEntities = createSelector(
    selectRecipeState,
    fromRecipes.recipeReducer.selectRecipeEntities
  );

  export const selectAllRecipes = createSelector(
    selectRecipeState,
    fromRecipes.recipeReducer.getRecipes
  );

  export const selectRecipeIds = createSelector(
    selectRecipeState,
    fromRecipes.recipeReducer.selectRecipeIds
  );

  export const selectCurrentRecipeId = createSelector(
    selectRecipeState,
    fromRecipes.recipeReducer.getSelectedRecipeId
  );

  export const selectCurrentRecipe = createSelector(
    selectRecipeEntities,
    selectCurrentRecipeId,
    (RecipeEntities, RecipeId) => RecipeEntities[RecipeId]
  );

  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
}
