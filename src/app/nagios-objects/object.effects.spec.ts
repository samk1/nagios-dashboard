import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, ReplaySubject } from 'rxjs';
import { single } from 'rxjs/operators';

import { ObjectEffects } from './object.effects';
import { ObjectJsonCgiService } from './object-json-cgi.service';
import { LoadObjects, HostgroupsLoaded, ObjectActions, ObjectActionTypes } from './object.actions';
import { hot, cold } from 'jasmine-marbles';

describe('ObjectEffects', () => {
  let actions$: Observable<any>;
  let effects: ObjectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ObjectEffects,
        provideMockActions(() => actions$),
        { 
          provide: ObjectJsonCgiService, 
          useValue: jasmine.createSpyObj('objectJsonCgiService', [
          'getHostgroupDetails'
          ])
        }
      ]
    });

    effects = TestBed.get(ObjectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should load hostgroups', () => {
    actions$ = hot('a', {a: new LoadObjects()});
    const objectJsonCgiService = TestBed.get(ObjectJsonCgiService);
    objectJsonCgiService.getHostgroupDetails.and.returnValue(Observable.create(observer => {
      observer.next([{}])
    }));

    effects.loadObjects$.pipe(
      single((action : ObjectActions) => action.type == ObjectActionTypes.HostgroupsLoaded)
    ).subscribe(
      (hostgroupsLoaded: HostgroupsLoaded ) => {
        expect(hostgroupsLoaded.hostgroups).toBeDefined()
      }
    )
  })
});
