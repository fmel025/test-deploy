package com.group6.server.utils;

import org.springframework.stereotype.Component;
import org.springframework.validation.FieldError;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@Component
public class ErrorHandler {
    public Map<String, List<String>> mapErrors(List<FieldError> errors){
        Map<String, List<String>> errorsMap = new HashMap<>();

        errors
                .forEach(error -> {
                    List<String> data = errorsMap.get(error.getField());

                    if(data == null){
                        data = new ArrayList<>();
                    }

                    data.add(error.getDefaultMessage());
                    errorsMap.put(error.getField(), data);
                });

        return errorsMap;
    }
}
