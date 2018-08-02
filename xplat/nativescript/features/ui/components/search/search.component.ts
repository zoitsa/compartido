import { Component } from '@angular/core';

import { SearchBaseComponent } from '@compartido/features';
import { Store } from '@ngrx/store';
import { RecipesState } from '@compartido/core/state/recipes.state';
import { SearchBar } from 'tns-core-modules/ui/search-bar';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent extends SearchBaseComponent {
  constructor(
    store: Store<RecipesState.State>
  ) {
    super( store );
  }
}
