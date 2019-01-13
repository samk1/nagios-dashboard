import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers'
import { LoadObjects } from './nagios-objects/object.actions'
import { Observable } from 'rxjs';
import { selectHostgroupCount, selectHostgroupNames } from './nagios-objects/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hostgroupCount$: Observable<number>
  hostgroupNames$: Observable<string[]>

  ngOnInit(): void {
    //this.store.dispatch(new LoadObjects())
  }

  title = 'NagiosDashboard';

  constructor(
    private store : Store<State>
  ) {
    this.hostgroupCount$ = store.select(selectHostgroupCount);
    this.hostgroupNames$ = store.select(selectHostgroupNames);
  }
}
