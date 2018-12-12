import { ServiceStatusComponent } from "./service-status/service-status.component";
import { ServiceStatusFilterComponent } from "./service-status-filter/service-status-filter.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms'
import { ServiceStatusFilterValueAccessorDirective } from "./service-status-filter/service-status-filter-value-accessor.directive";
import { BrowserModule } from "@angular/platform-browser";

export const COMPONENTS = [
    ServiceStatusComponent,
    ServiceStatusFilterComponent,
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