import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRowComponent } from './components/dashboard-row/dashboard-row.component';
import { DashboardWidgetComponent } from './components/dashboard-widget/dashboard-widget.component';
import { StoreModule } from '@ngrx/store';
import * as fromDashboard from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './effects/dashboard.effects';

@NgModule({
  declarations: [DashboardComponent, DashboardRowComponent, DashboardWidgetComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('dashboard', fromDashboard.reducers, { metaReducers: fromDashboard.metaReducers }),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
