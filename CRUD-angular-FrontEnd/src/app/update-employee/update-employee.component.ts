import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id? : Number;
  employee? : Employee ;

  constructor(private employeeService : EmployeeService , private router:Router , private activeRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.activeRoute.snapshot.params['id'];

    this.employeeService.getEmployee(this.id).subscribe(data=>{
      console.log(data);

      this.employee = data;
    }
   , error=>{
      this.employee = error;
    })
  }

  onsubmit(){

      this.employeeService.updateEmployee(this.id , this.employee).subscribe(response=>{

        console.log(response);
      },error=>console.log(error))


      this.router.navigate(['/employees']);
  }

}
