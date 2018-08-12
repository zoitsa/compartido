import { Component } from '@angular/core';

import { BaseComponent } from '@compartido/core';

@Component({
  selector: 'app-search-results',
  templateUrl: 'search-results.component.html'
})
export class SearchResultsComponent extends BaseComponent {
  constructor() {
    super();
  }
}
