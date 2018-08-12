import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HOME_COMPONENTS, HomeComponent } from './components';
import { SearchComponent } from '@compartido/web/features/ui/components'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...HOME_COMPONENTS, SearchComponent],
  exports: [...HOME_COMPONENTS]
})
export class HomeModule {}
