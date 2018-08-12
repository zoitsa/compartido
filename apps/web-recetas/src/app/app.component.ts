import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@compartido/web';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {

    constructor() {
        super();
    }
}
