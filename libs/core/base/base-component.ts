import { OnDestroy } from '../../../apps/nativescript-recetas/node_modules/@angular/core';

// libs
import { Subject } from '../../../apps/nativescript-recetas/node_modules/rxjs';

export abstract class BaseComponent implements OnDestroy {
  public destroy$: Subject<any> = new Subject();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
