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
  @ViewChild('input') input: ElementRef; // To select input element
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    protected store: Store<RecipesState.State>,
  ) {
    super();
  }

  ngOnInit() {
    console.log('woooo!')
    const source = fromEvent(this.input.nativeElement, 'keyup');
    source
      .pipe(
        takeUntil(this.unsubscribe),
        // Create an observable from input keyup events
        map((e: any) => e.target.value), // mapping the raw value to the actual user input
        filter((text: string) => text.length > 1), // do nothing if user enters nothing
        debounceTime(400), // only check the events every 400ms
        tap((query: string) => this.store.dispatch(new RecipeActions.Get(query))) // make a search with the query
      )
      .subscribe(data => {
        console.log(data);
      });
  }
}
