import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Hostgroup } from './reducers/hostgroups.reducer';
import { JsonCgiResponse, AbstractCgi, QueryParams } from '../nagios-common';

export const OBJECT_CGI_URL = new InjectionToken<string>('object cgi url');

interface ObjectJsonHostgroupData {
  selectors: any,
  hostgrouplist: ObjectJsonHostgroupList
}

type ObjectJsonHostgroupList = {[key:string]: HostgroupDetails }

interface HostgroupDetails {
  group_name: string
  alias: string
  members: string[]
  notes: string
  notes_url: string
  action_url: string
}

@Injectable({
  providedIn: 'root'
})
export class ObjectJsonCgiService extends AbstractCgi {
  getHostgroupDetails() : Observable<Hostgroup[]> {
    const params: QueryParams = {
      query: 'hostgrouplist',
      details: true
    }

    return this.doRequest<ObjectJsonHostgroupData>(params)
      .pipe(
        map<ObjectJsonHostgroupData, Hostgroup[]>(data =>
          _.mapValues(data.hostgrouplist, 
            (hostgroupDetails: HostgroupDetails) : Hostgroup => ({
              name: hostgroupDetails.group_name,
              alias: hostgroupDetails.action_url,
              members: hostgroupDetails.members,
              notes: hostgroupDetails.notes,
              notesUrl: hostgroupDetails.notes_url,
              actionUrl: hostgroupDetails.action_url
            })
          )
        )
      )
  }

  constructor(
    http: HttpClient,
    @Inject(OBJECT_CGI_URL) cgiUrl: string
    ) { 
      super(http, cgiUrl);
    }
}
