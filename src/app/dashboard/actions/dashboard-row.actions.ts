import { Action } from '@ngrx/store';

export enum DashboardRowActionTypes {
    AddDashboardWidget = '[DashboardRow] Add DashboardWidget'
}

abstract class DashboardRowAction implements Action {
    constructor(
        public rowId: number,
        public type: string
    )
    { }
}

export class AddDashboardWidget extends DashboardRowAction implements Action {
    constructor(
        rowId: number
    ) {
        super(rowId, DashboardRowActionTypes.AddDashboardWidget)
    }
}

export type DashboardRowActions = AddDashboardWidget