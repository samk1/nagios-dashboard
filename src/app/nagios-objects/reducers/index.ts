import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromHostgroups from './hostgroups.reducer';
import * as fromHosts from './hosts.reducer';
import * as fromServicegroups from './servicegroups.reducer';
import * as fromServices from './services.reducer';

export interface State {
  hostgroups: fromHostgroups.State,
  hosts: fromHosts.State,
  servicegroups: fromServicegroups.State,
  services: fromServices.State
}

export const reducers: ActionReducerMap<State> = {
  hostgroups: fromHostgroups.reducer,
  hosts: fromHosts.reducer,
  servicegroups: fromServicegroups.reducer,
  services: fromServices.reducer
};

const selectNagiosObjectsState = createFeatureSelector('nagiosObjects');

const selectHostgroupsState = createSelector(
  selectNagiosObjectsState,
  (state: State): fromHostgroups.State => state.hostgroups
)

export const selectHostgroups = createSelector(
  selectHostgroupsState,
  (state: fromHostgroups.State) => Object.values(state)
)

export const selectHostgroupCount = createSelector(
  selectHostgroupsState,
  (state: fromHostgroups.State) => Object.keys(state).length
)

export const selectHostgroupNames = createSelector(
  selectHostgroupsState,
  (state: fromHostgroups.State) => Object.keys(state)
)