import { ServiceStatusComponent } from "./service-status/service-status.component";
import { ServiceStatusFilterComponent } from "./service-status-filter/service-status-filter.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms'
import { ServiceStatusFilterValueAccessorDirective } from "./service-status-filter/service-status-filter-value-accessor.directive";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceStatusFormComponent } from "./service-status-form/service-status-form.component";

export const COMPONENTS = [
    ServiceStatusComponent,
    ServiceStatusFilterComponent,
    ServiceStatusFormComponent,
    ServiceStatusFilterValueAccessorDirective
];

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule { }