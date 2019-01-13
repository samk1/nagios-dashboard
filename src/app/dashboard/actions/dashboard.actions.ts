import { Action } from '@ngrx/store';
import { DashboardRowActions } from './dashboard-row.actions';

export enum DashboardActionTypes {
  AddDashboardRow = '[Dashboard] Add DashboardRow',
  NewDashboardRow = '[Dashboard] New DashboardRow'
}

export class AddDashboardRow implements Action {
  readonly type = DashboardActionTypes.AddDashboardRow;
}

export class NewDashboardRow implements Action {
  readonly type = DashboardActionTypes.NewDashboardRow;
  
  constructor(
    public rowId: number
  )
  { }
}

export type DashboardActions = AddDashboardRow | NewDashboardRow;
