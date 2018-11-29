import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNagiosObjects from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('nagiosObjects', fromNagiosObjects.reducers)
  ]
})
export class NagiosObjectsModule { }
