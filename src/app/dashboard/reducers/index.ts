import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { DashboardActionTypes, DashboardActions } from '../actions/dashboard.actions';

export interface DashboardWidget {
  id: string
}

export interface DashboardRow {
  id: number,
  widgets: DashboardWidget[]
}

export type State = DashboardRow[]

export const initialState: State = []


export const reducer: ActionReducer<DashboardRow[], DashboardActions> = (state, action) => {
  switch (action.type) {
    case DashboardActionTypes.NewDashboardRow:
      return [ ...state, {
        id: action.rowId,
        widgets: []
      }]
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectDashboardState = createFeatureSelector('dashboard');