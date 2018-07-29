import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { State } from '../reducers';
import { of } from 'rxjs/Observable/of';
import {
  RecipesActions,
  RecipesActionTypes,
  Get,
  GetComplete,
  GetError,
  Select,
  // SelectComplete,
  SelectError,
  } from '../actions/recipes.actions';


import {
  tap,
  map,
  switchMap,
  skip,
  takeUntil,
  catchError,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../core/services/api.service';
import { resetFakeAsyncZone } from '@angular/core/testing';

export const errorHandler = (action) => (err) => {
  let message = err.error && err.error.message;
  if (!message) {
    message = 'Something went wrong, try again.';
  }
  return of(new action(message));
};


@Injectable()
export class RecipesEffects {

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store$: Store<State>,
    private router: Router,
  ) {}

  @Effect()
  getAll$: Observable<Action> = this.actions$.pipe(
    ofType<Get>(RecipesActionTypes.GET),
    switchMap((action) => {
      return this.api.searchRecipes(action.payload)
        .pipe(
          map((res: object) => new GetComplete(res)),
          catchError(errorHandler(GetError))
        );
    }),
  );

} // end Recipes Effects
