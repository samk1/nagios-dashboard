import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LoadObjects, ObjectActionTypes, HostgroupsLoaded } from './object.actions';
import { ObjectJsonCgiService } from './object-json-cgi.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class ObjectEffects {
  @Effect() loadObjects$ = this.actions$
    .ofType(ObjectActionTypes.LoadObjects)
    .pipe(
      switchMap(() => Observable.create(observer => {
        this.objectJsonCgiService.getHostgroupDetails()
          .subscribe(hostgroups => observer.next({
            type: ObjectActionTypes.HostgroupsLoaded, hostgroups 
          }))
        }
      ))
    )

  constructor(
    private actions$: Actions, 
    private objectJsonCgiService: ObjectJsonCgiService) {}
}
