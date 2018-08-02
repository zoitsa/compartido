import { Component, } from '@angular/core';

import { SearchBaseComponent } from '@compartido/features';
import { Store } from '@ngrx/store';
import { RecipesState } from '@compartido/core/state/recipes.state';


@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent extends SearchBaseComponent {
  constructor(
    protected store: Store<RecipesState.State>,
  ) {
    super( store );
  }
}
