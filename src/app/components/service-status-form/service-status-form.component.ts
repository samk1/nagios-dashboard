import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { initialServiceStatusFilterValue } from '../service-status-filter/service-status-filter.component';

@Component({
  selector: 'app-service-status-form',
  templateUrl: './service-status-form.component.html',
  styleUrls: ['./service-status-form.component.scss']
})
export class ServiceStatusFormComponent implements OnInit {
  @Input() hostgroupNames: string[]

  form = this.fb.group({
    statusFilter: this.fb.control(initialServiceStatusFilterValue),
    hostgroupFilter: this.fb.control('')
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
