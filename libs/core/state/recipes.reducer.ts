import { Action } from '@ngrx/store';
import { RecipeActions } from './recipes.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export namespace recipeReducer {
  export interface State extends EntityState<any> {
    loading: boolean;
    searchTerms: string;
    selectedId: string;
    results: Array<Object>;
  }

  export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
    selectId: (recipes: any) => recipes.recipe.uri
  });

  export const initialState: State = adapter.getInitialState({
    loading: false,
    searchTerms: '',
    selectedId: '',
    results: []
    // uri: ''
  });

  export function reducer(
    state = initialState,
    action: RecipeActions.Actions
  ): State {
    switch (action.type) {
      case RecipeActions.Types.GET:
        return {
          ...state,
          loading: true,
          searchTerms: action.payload
        };

      case RecipeActions.Types.GET_COMPLETE:
        return adapter.addMany(action.payload.hits, {
          ...state,
          loading: false,
          results: action.payload.hits
        });

      default:
        return state;
    }
  }

  export const {
    selectEntities: selectRecipeEntities,
    selectAll: selectAllRecipes,
    selectIds: selectRecipeIds
  } = adapter.getSelectors();

  export const loading = (state: State) => state.loading;
  export const getSelectedRecipeId = (state: State) => state.selectedId;
  export const getRecipes = (state: State) => state.results;

  // describe('recipesReducer', () => {
  //   it('should work', () => {
  //     const action: RecipesActions.Loaded = new RecipesActions.Loaded({});
  //     const actual = recipesReducer(RecipesState.initialState, action);
  //     expect(actual).toEqual({});
  //   });
  // });
}
