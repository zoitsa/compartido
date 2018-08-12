import { Action } from '@ngrx/store';

export namespace RecipeActions {
  export enum Types {
    GET = '[@compartido/recipes] Get',
    GET_COMPLETE = '[@compartido/recipes] GetComplete',
    GET_ERROR = '[@compartido/recipes] GetError'
  }

  export class Get implements Action {
    readonly type: string = Types.GET;
    constructor(public payload: any) {}
  }

  export class GetComplete implements Action {
    readonly type: string = Types.GET_COMPLETE;
    constructor(public payload: any) {}
  }

  export class GetError implements Action {
    readonly type: string = Types.GET_ERROR;
    constructor(public payload: any) {}
  }

  export type Actions 
  = Get 
  | GetComplete 
  | GetError;
}
