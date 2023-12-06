package com.fitFusion.springbootlibrary.controller;

import com.fitFusion.springbootlibrary.entity.Exercise;
import com.fitFusion.springbootlibrary.entity.FitnessClass;
import com.fitFusion.springbootlibrary.service.ExerciseService;
import com.fitFusion.springbootlibrary.service.FitnessClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin( origins = "http://localhost:5174")
@RestController
public class ExerciseController {

    @Autowired
    private ExerciseService exerciseService;

    @GetMapping("/api/exercises")
    public ResponseEntity<List<Exercise>> getExercises() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<>(exerciseService.getExercises(), headers, HttpStatus.OK);
    }
}
