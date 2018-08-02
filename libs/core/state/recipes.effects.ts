import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { RecipesState } from '@compartido/core/state/recipes.state';
import { RecipeActions } from './recipes.actions';
import { DataPersistence } from '@nrwl/nx';
import { ApiService } from '@compartido/core/services';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {
  tap,
  map,
  switchMap,
  skip,
  takeUntil,
  catchError,
  mergeMap,
  withLatestFrom
} from 'rxjs/operators';

export const errorHandler = action => err => {
  let message = err.error && err.error.message;
  if (!message) {
    message = 'Something went wrong, try again.';
  }
  return of(new action(message));
};

@Injectable()
export class RecipesEffects {
  // @Effect()
  // load$ = this.dataPersistence.fetch(RecipesActions.Types.LOAD, {
  //   run: (action: RecipesActions.Load, state: RecipesState.IState) => {
  //     return new RecipesActions.Loaded(state);
  //   },

  //   onError: (action: RecipesActions.Load, error) => {
  //     console.error('Error', error);
  //   }
  // });

  @Effect()
  getAll$: Observable<Action> = this.actions$.pipe(
    ofType(RecipeActions.Types.GET),
    switchMap((action: RecipeActions.Get) => {
      return this.api
        .searchRecipes(action.payload)
        .pipe(
          map((res: object) => new RecipeActions.GetComplete(res)),
          catchError(errorHandler(RecipeActions.GetError))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RecipesState.State>,
    private api: ApiService,
    private store$: Store<RecipesState.State>
  ) {}
}
