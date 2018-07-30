import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// libs
import { environment } from '@compartido/core';

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
        HttpClientModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
