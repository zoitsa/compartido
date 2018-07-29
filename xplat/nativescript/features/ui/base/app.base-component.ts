import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@compartido/core';
import { AppService } from '@compartido/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
