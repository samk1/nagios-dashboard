import { Action } from '@ngrx/store';
import * as fromHostgroups from './reducers/hostgroups.reducer';

export enum ObjectActionTypes {
  LoadObjects = '[Object] Load Objects',
  HostgroupsLoaded = '[Object] Hostgroups Loaded'
}

export class LoadObjects implements Action {
  readonly type = ObjectActionTypes.LoadObjects;
}

export class HostgroupsLoaded implements Action {
  readonly type = ObjectActionTypes.HostgroupsLoaded
  readonly hostgroups : fromHostgroups.State
}

export type ObjectActions = LoadObjects | HostgroupsLoaded;
