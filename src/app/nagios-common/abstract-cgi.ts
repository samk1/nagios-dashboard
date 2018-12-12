import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';

export type QueryParams = {[key:string]: string | boolean | number}

export interface JsonCgiResponse<TData> {
    format_version: number
    result: JsonCgiResult
    data: TData
}

export type JsonCgiData = any;

export interface JsonCgiResult {
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

export class AbstractCgi {
    protected doRequest<TData>(params: QueryParams) : Observable<TData> {
        const requestUrl: string = `${this.cgiUrl}?${this.buildQuery(params)}`

        return this.http.get<JsonCgiResponse<TData>>(requestUrl)
            .pipe(
                map(response => response.data)
            );
    }

    private buildQuery(params: QueryParams) : string {
        return _.transform(params, (q, v, k) => q.push(`${k}=${v}`), [])
          .join('&')
      }

    constructor(
        private http: HttpClient,
        private cgiUrl: string
    ) { }
}