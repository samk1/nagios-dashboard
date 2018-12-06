import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Hostgroup } from './reducers/hostgroups.reducer';

export const OBJECT_CGI_URL = new InjectionToken<string>('object cgi url');

interface ObjectJsonResponse {
  format_version: number
  result: ObjectJsonResult
  data: ObjectJsonData
}

interface ObjectJsonResult {
  query_time: number
  cgi: string
  user: string
  query: string
  query_status: string
  program_start: number
  last_data_update: number
  type_code: number
  type_text: string
  message: string
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

type ObjectJsonData = ObjectJsonHostgroupList

type QueryParams = {[key:string]: string | boolean | number}

@Injectable({
  providedIn: 'root'
})
export class ObjectJsonCgiService {
  getHostgroupDetails() : Observable<Hostgroup[]> {
    const params: QueryParams = {
      query: 'hostgrouplist',
      details: true
    }

    return this.doRequest(params)
      .pipe(
        map<ObjectJsonResponse, Hostgroup[]>(response =>
          _.values(response.data.hostgrouplist)
            .map((hostgroupDetails: HostgroupDetails) : Hostgroup => ({
              name: hostgroupDetails.group_name,
              alias: hostgroupDetails.action_url,
              members: hostgroupDetails.members,
              notes: hostgroupDetails.notes,
              notesUrl: hostgroupDetails.notes_url,
              actionUrl: hostgroupDetails.action_url
            }))
        )
      )
  }

  private doRequest(params: QueryParams) : Observable<ObjectJsonResponse> {
    const requestUrl: string = `${this.cgiUrl}?${this.buildQuery(params)}`

    return this.http.get<ObjectJsonResponse>(requestUrl)
  }

  private buildQuery(params: QueryParams) : string {
    return _.transform(params, (q, v, k) => q.push(`${k}=${v}`), [])
      .join('&')
  }

  constructor(
    private http: HttpClient,
    @Inject(OBJECT_CGI_URL) private cgiUrl: string
    ) { }
}
