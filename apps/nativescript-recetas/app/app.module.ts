// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CoreModule, 
    SharedModule, 
    AppRoutingModule, 
    NativeScriptHttpClientModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
