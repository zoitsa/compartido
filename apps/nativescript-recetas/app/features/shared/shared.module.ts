import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@compartido/nativescript';

const MODULES = [
  UIModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [],
  exports: [
    ...MODULES,
  ]
})
export class SharedModule {}
