import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { NagiosObjectsModule } from './nagios-objects/nagios-objects.module';
import { OBJECT_CGI_URL } from './nagios-objects/object-json-cgi.service';
import { ServiceStatusComponent } from './components/service-status/service-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceStatusComponent
  ],
  imports: [
    BrowserModule,
    NagiosObjectsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    {
      provide: OBJECT_CGI_URL,
      useValue: environment.objectCgiUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
