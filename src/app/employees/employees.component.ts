import { Component } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  public listemployees: Employee[] = [];
  constructor(private employeeService: EmployeesService, private router: Router) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe( (data)=> {
      console.log(data);
      this.listemployees = data;
    } );
  }

  public addEmployee() {
    this.router.navigate(['employee-form']);
  }

}
