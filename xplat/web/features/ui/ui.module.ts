import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatIconModule,
} from '@angular/material';


// libs
import { UISharedModule } from '@compartido/features';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  UISharedModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatIconModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class UIModule {}
