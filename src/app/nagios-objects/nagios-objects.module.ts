import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNagiosObjects from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ObjectEffects } from './object.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('nagiosObjects', fromNagiosObjects.reducers),
    EffectsModule.forFeature([ObjectEffects])
  ]
})
export class NagiosObjectsModule { }
