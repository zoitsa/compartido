import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { environment } from '../core/environments/environment';
  import * as fromRecipes from './recipes.reducer';
  
  export interface State {
    recipes: fromRecipes.State;
  }
  
  export const reducers: ActionReducerMap<State> = {
    recipes: fromRecipes.reducer,
  };
  
  export const selectRecipeState = (state: State) => state.recipes;
  
  export const selectRecipeEntities = createSelector(
    selectRecipeState,
    fromRecipes.selectRecipeEntities
  );
  
  export const selectAllRecipes = createSelector(
    selectRecipeState,
    fromRecipes.getRecipes
  );
  
  export const selectRecipeIds = createSelector(
    selectRecipeState,
    fromRecipes.selectRecipeIds
  );
  
  export const selectCurrentRecipeId = createSelector(
    selectRecipeState,
    fromRecipes.getSelectedRecipeId
  );
  
  export const selectCurrentRecipe = createSelector(
    selectRecipeEntities,
    selectCurrentRecipeId,
    (RecipeEntities, RecipeId) => RecipeEntities[RecipeId]
  );
  
  // -----
  // export const resultsLoading = createSelector(
  //   selectRecipesState,
  //   fromRecipes.loading
  // );
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
  