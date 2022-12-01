package com.example.CRUD.Spring.Boot.Backend.Response;

import lombok.Data;
import lombok.NonNull;

@Data
public class Response {
    @NonNull
    private String message;

    public Response(String message) {
        this.message = message;
    }
}
