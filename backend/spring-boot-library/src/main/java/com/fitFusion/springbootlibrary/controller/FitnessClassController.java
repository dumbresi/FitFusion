package com.fitFusion.springbootlibrary.controller;

import com.fitFusion.springbootlibrary.entity.FitnessClass;
import com.fitFusion.springbootlibrary.service.FitnessClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin( origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/fitnessClasses")
public class FitnessClassController {

    @Autowired
    private FitnessClassService fitnessClassService;

    @GetMapping("/sorted")
    public List<FitnessClass> getSortedFitnessClasses() {
        return fitnessClassService.getSortedFitnessClasses();
    }

    @GetMapping("/{classId}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable Long classId) {
        //byte[] imageBytes = fitnessClassService.getImageBytes(classId);

//        if (imageBytes != null) {
//            HttpHeaders headers = new HttpHeaders();
//            headers.setContentType(MediaType.IMAGE_JPEG);
//            return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}