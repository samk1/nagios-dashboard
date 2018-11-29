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
import * as fromRoot from '../../reducers';

export interface NagiosObjectsState extends fromRoot.State {
  hostgroups: fromHostgroups.State,
  hosts: fromHosts.State,
  servicegroups: fromServicegroups.State,
  services: fromServices.State
}

export const reducers: ActionReducerMap<NagiosObjectsState> = {
  hostgroups: fromHostgroups.reducer,
  hosts: fromHosts.reducer,
  servicegroups: fromServicegroups.reducer,
  services: fromServices.reducer
};