package com.example.CRUD.Spring.Boot.Backend.Repositories;

import com.example.CRUD.Spring.Boot.Backend.Entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Override
    List<Employee> findAll();
}
