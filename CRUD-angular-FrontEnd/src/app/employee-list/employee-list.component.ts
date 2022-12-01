import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from "../models/employee";
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {



  constructor(private employeeService : EmployeeService , private router:Router) { }


  ngOnInit(): void {
    this.getEmployees();
  }

  employees : Employee[] = [];

      getEmployees(){
      this.employeeService.getEmployeesList().subscribe(data=>{
        this.employees = data;
      });
    }


    supprimer(id? : Number){
      this.employeeService.deleteEmployee(id).subscribe(response=>{
        console.log(response);
        this.getEmployees();
      })
    }


    modifier(id? : Number){
      this.router.navigate([`/update-employee` , id])

    }

    details(id? : Number){
      this.router.navigate(['/employee-details', id])
    }








}
