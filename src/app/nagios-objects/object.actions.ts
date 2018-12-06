import { Action } from '@ngrx/store';
import { Hostgroup } from './reducers/hostgroups.reducer';

export enum ObjectActionTypes {
  LoadObjects = '[Object] Load Objects',
  HostgroupsLoaded = '[Object] Hostgroups Loaded'
}

export class LoadObjects implements Action {
  readonly type = ObjectActionTypes.LoadObjects;
}

export class HostgroupsLoaded implements Action {
  readonly type = ObjectActionTypes.HostgroupsLoaded
  readonly hostgroups : Hostgroup[]
}

export type ObjectActions = LoadObjects | HostgroupsLoaded;
