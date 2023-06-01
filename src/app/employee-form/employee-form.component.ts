import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../models/Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  public employeeForm :any = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    sex: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private employeeService: EmployeesService, private router : Router){}

  ngOnInit(): void{}

  public onSubmit(){
    var employee: Employee = {
      name: this.employeeForm.get('name')?.value,
      age: this.employeeForm.get('age')?.value,
      sex: this.employeeForm.get('sex')?.value,
      address: this.employeeForm.get('address')?.value,
      id: '',
      salary: 0,
      birthdate: new Date(2000,1,1)
    };


    this.employeeService.addEmployee(employee as Employee).subscribe( (data) => {
      console.log('Them nhan vien moi' + data);
      this.router.navigate(['employees']);
    });
  }
}
