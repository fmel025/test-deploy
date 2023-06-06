package com.group6.server.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
public class ErrorsDTO {
    private Map<String, List<String>> errors;
}
