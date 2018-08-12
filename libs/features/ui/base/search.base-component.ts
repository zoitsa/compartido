import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '@compartido/core/base';

import { Observable, Subject } from 'rxjs';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, debounceTime, tap, filter, takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';

// libs
import {
  RecipeActions
} from '@compartido/core/state/recipes.actions';

import { RecipesState } from '@compartido/core/state/recipes.state';

export abstract class SearchBaseComponent extends BaseComponent
  implements OnInit {
  public search$: Subject<string> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    protected store: Store<RecipesState.State>,
  ) {
    super();
  }

  ngOnInit() {
    this.search$.pipe(
      debounceTime(500), 
      takeUntil(this.destroy$),
      tap((query: string) => {
        this.store.dispatch(new RecipeActions.Get(query))
      })
    ).subscribe((value: string) => {
    })
  }
}
