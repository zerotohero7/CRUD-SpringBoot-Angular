package com.example.CRUD.Spring.Boot.Backend.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class RessourceNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1L ;

    public RessourceNotFoundException(String message){
        super(message);
    }


}
