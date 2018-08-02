import { Component } from '@angular/core';

import { SearchBaseComponent } from '@compartido/features';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent extends SearchBaseComponent {
  constructor() {
    super();
  }
}
