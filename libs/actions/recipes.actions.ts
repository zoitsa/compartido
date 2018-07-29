import { Action } from '@ngrx/store';

export enum RecipesActionTypes {
    GET= '[Recipes] GET',
    GET_COMPLETE = '[Recipes] GET_COMPLETE',
    GET_ERROR = '[Recipes] GET_ERROR',
    SELECT = '[Recipes] SELECT',
    SELECT_ERROR = '[Recipes] SELECT_ERROR'
  }

  export class Get implements Action {
    readonly type = RecipesActionTypes.GET;

    constructor(public payload: any) {}
  }

  export class GetComplete implements Action {
    readonly type = RecipesActionTypes.GET_COMPLETE;

    constructor(public payload: any) {}
  }

  export class GetError implements Action {
    readonly type = RecipesActionTypes.GET_ERROR;

    constructor(public payload: any) {}
  }

  export class Select implements Action {
    readonly type = RecipesActionTypes.SELECT;

    constructor(public payload: string) {}
  }

  export class SelectError implements Action {
    readonly type = RecipesActionTypes.SELECT_ERROR;

    constructor(public payload: any) {}
  }


export type RecipesActions
= Get
| GetComplete
| GetError
| Select
| SelectError;

