import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeComponent } from "./employee/employee.component";

@NgModule({
    imports :       [ CommonModule ],
    providers :     [],
    declarations :  [ EmployeeComponent ],
    exports :       [ EmployeeComponent ]
})
export class EmployeeModule{}