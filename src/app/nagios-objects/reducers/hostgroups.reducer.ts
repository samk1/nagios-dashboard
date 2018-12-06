import { Action } from '@ngrx/store';

export interface Hostgroup {
  name: string
  alias: string
  members: string[]
  notes: string
  notesUrl: string
  actionUrl: string
}

export interface State {
  hostgroups: Hostgroup[]
}

export const initialState: State = {
  hostgroups: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
