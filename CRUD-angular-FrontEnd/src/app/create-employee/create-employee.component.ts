import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();

  constructor(private employeeService : EmployeeService , private router:Router ) { }

  ngOnInit(): void {
  }

  onsubmit(){

      this.employeeService.createEmployee(this.employee).subscribe(response=>{
        console.log(response);
      },error=>console.log(error))


      this.router.navigate(['/employees']);
  }



}
