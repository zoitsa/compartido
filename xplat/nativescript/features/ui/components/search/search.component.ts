import { Component, OnInit } from '@angular/core';

import { SearchBaseComponent } from '@compartido/features';
import { Store, select } from '@ngrx/store';
import { RecipesState } from '@compartido/core/state/recipes.state';
import { SearchBar } from 'tns-core-modules/ui/search-bar';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent extends SearchBaseComponent {
  test = 'test';

  constructor(
    store: Store<RecipesState.State>
  ) {
    super( store );
  }

  public onTextChanged(args) {
    let searchBar = <SearchBar>args.object;
    this.search$.next(searchBar.text);
}

}
