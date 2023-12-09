package com.fitFusion.springbootlibrary.controller;

import com.fitFusion.springbootlibrary.service.CsvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class CsvController {

    @Autowired
    private CsvService csvService;

    // This is the endpoint that will be called when the user uploads a CSV file it will accept the .csv files and decode it.
    @PostMapping("/api/upload-csv")
    public String uploadCsvFile(@RequestBody MultipartFile file) {
        try {
            csvService.readDataFromCsv(file);
            return "File uploaded and data saved successfully.";
        } catch (Exception e) {
            System.out.println("**: "+e);
            return "Error: " + e.getMessage();
        }
    }
}