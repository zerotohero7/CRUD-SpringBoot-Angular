package com.example.CRUD.Spring.Boot.Backend.Controlers;

import com.example.CRUD.Spring.Boot.Backend.Entities.Employee;
import com.example.CRUD.Spring.Boot.Backend.Repositories.EmployeeRepository;
import com.example.CRUD.Spring.Boot.Backend.Response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class EmployeeControler {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }

    @GetMapping("/employees/{id}")
    public Employee getOneEmployee(@PathVariable("id") Long employeeId){
        return employeeRepository.findById(employeeId).orElse(null);
    }

    @PostMapping("/employees")
    public Employee postEmployee(@RequestBody Employee employee){
      return  employeeRepository.save(employee);
    }

    @DeleteMapping("/employees/{id}")
    public Response deleteEmployee(@PathVariable("id") Long employeeId){
          employeeRepository.deleteById(employeeId);
          return  new Response("deleted employee was succussfully !!! ");
    }

    @PutMapping("/employees/{id}")
    public Response updateEmployee(@PathVariable("id") Long employeeId ,@RequestBody Employee employee){
        employee.setId(employeeId);
        employeeRepository.save(employee);
        return  new Response("updated employee was succussfully !!! ");
    }











}
