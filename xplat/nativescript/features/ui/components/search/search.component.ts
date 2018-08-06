import { Component, OnInit } from '@angular/core';

import { SearchBaseComponent } from '@compartido/features';
import { Store, select } from '@ngrx/store';
import { RecipesState } from '@compartido/core/state/recipes.state';
import { SearchBar } from 'tns-core-modules/ui/search-bar';
import { Observable, Subject} from 'rxjs';


@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent extends SearchBaseComponent implements OnInit {
  results$: Observable<any>;

  constructor(
    store: Store<RecipesState.State>
  ) {
    super( store );
    this.results$ = store.pipe(
      select(RecipesState.selectAllRecipes)
    );
  }


  ngOnInit() {
    this.results$.subscribe(data => {
      console.log(data);
    })
  }
}
