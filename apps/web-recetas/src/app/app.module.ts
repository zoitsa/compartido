import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// libs
import { environment } from '@compartido/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CoreModule, 
    SharedModule,
    HttpClientModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
