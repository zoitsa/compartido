import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
  Inject
} from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

// libs
import { NxModule } from '@nrwl/nx';
import { TranslateService } from '@ngx-translate/core';
import { throwIfAlreadyLoaded } from '@compartido/utils';
import { ApiService } from '@compartido/core/services/api.service';
import {
  CMSActions,
  CMSActionsSubject,
} from '@compartido/core/services/dispatcher.service';

// ngrx
import { StoreModule, ActionsSubject } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
// import { reducers, metaReducers } from '@compartido/core/state';

// app
import { environment } from '@compartido/core/environments/environment';
import { CORE_PROVIDERS, PlatformLanguageToken } from '@compartido/core/services';
import { LogService } from '@compartido/core/services/log.service';
import { storeFreeze } from 'ngrx-store-freeze';
import { RecipesEffects } from './state/recipes.effects';
import { recipeReducer } from './state/recipes.reducer';
import { RecipesState } from './state/recipes.state';

/**
 * DEBUGGING
 */
LogService.DEBUG.LEVEL_4 = !environment.production;

export const BASE_PROVIDERS: any[] = [
  ...CORE_PROVIDERS,
  {
    provide: APP_BASE_HREF,
    useValue: '/'
  }
];

@NgModule({
  imports: [
    CommonModule, 
    NxModule.forRoot(), 
    StoreModule.forRoot(
      { recipes: RecipesState.reducers.recipes},
      {
        initialState: { recipes: RecipesState.initialState.recipes },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ), 
    // StoreModule.forRoot(RecipesState.reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([RecipesEffects]),
  ],
  providers: [
    ApiService,
    { provide: ActionsSubject, useClass: CMSActionsSubject },
    CMSActions,
    RecipesEffects,
  ]
})
export class CoreModule {
  // configuredProviders: *required to configure WindowService and others per platform
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [...BASE_PROVIDERS, ...configuredProviders]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    @Inject(PlatformLanguageToken) lang: string,
    translate: TranslateService
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');

    // ensure default platform language is set
    translate.use(lang);
  }
}
