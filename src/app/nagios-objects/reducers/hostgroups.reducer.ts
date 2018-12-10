import { ObjectActionTypes, ObjectActions } from '../object.actions';

export interface Hostgroup {
  name: string
  alias: string
  members: string[]
  notes: string
  notesUrl: string
  actionUrl: string
}

export type State = {[key: string]: Hostgroup}

export const initialState: State = {
};

export function reducer(state = initialState, action: ObjectActions): State {
  switch (action.type) {
    case ObjectActionTypes.HostgroupsLoaded:
      return action.hostgroups;
    default:
      return state;
  }
}
