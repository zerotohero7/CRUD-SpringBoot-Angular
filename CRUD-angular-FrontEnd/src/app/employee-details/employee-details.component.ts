import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private ActiveRoute : ActivatedRoute , private employeeService : EmployeeService) { }

  id? : Number ;
  employee : Employee = new Employee();

  ngOnInit(): void {
    this.id = this.ActiveRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(data=>{
      this.employee = data;
     })
   }



}
