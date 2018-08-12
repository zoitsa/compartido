import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Action, ActionsSubject } from '@ngrx/store';


@Injectable()
export class CMSActions {
  _actions = new Subject<Action>();

  ofType( type: string ) {
    return this._actions.pipe(filter(( action: Action ) => action.type === type));
  }

  nextAction( action: Action ) {
    this._actions.next(action);
  }

}

@Injectable()
export class CMSActionsSubject extends ActionsSubject {
  constructor( private actions: CMSActions ) {
    super();
  }

  next( action: Action ) {
    super.next(action);
    this.actions.nextAction(action);
  }
}
