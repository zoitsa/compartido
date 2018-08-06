import { Component, OnInit } from '@angular/core';

import { SearchBaseComponent } from '@compartido/features';
import { Store, select } from '@ngrx/store';
import { RecipesState } from '@compartido/core/state/recipes.state';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent extends SearchBaseComponent {
  results$;

  constructor(
    protected store: Store<RecipesState.State>,
  ) {
    super(store);
    this.results$ = store.pipe(
      select(RecipesState.selectAllRecipes)
    );
  }
}
