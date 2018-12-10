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

export const selectNagiosObjects = createFeatureSelector('nagiosObjects');

export const selectHostgroups = (state: State): fromHostgroups.State => state.hostgroups

export const selectHostgroupCount = createSelector(
  selectNagiosObjects,
  selectHostgroups,
  (state: fromHostgroups.State) => state ? Object.keys(state).length : 0
)