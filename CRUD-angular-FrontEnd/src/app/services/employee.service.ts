import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from "../models/employee";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private _http : HttpClient) { }

  baseURL =  "http://localhost:8080/api/v1/employees";

  getEmployeesList() : Observable<Employee[]>{
      return this._http.get<Employee[]>(this.baseURL);
  }

  createEmployee(employee? :Employee) : Observable<Employee>{
      return this._http.post(this.baseURL , employee)
  }
  getEmployee(id?: Number) :Observable<Employee>{
      return this._http.get(`${this.baseURL}/${id}`)
  }

  deleteEmployee(id? : Number) :  Observable<Object>{
    return this._http.delete(`${this.baseURL}/${id}`)
  }

  updateEmployee(id?:Number , employee? : Employee) :Observable<Object>{
    return this._http.put(this.baseURL+"/"+id , employee)
  }


}
