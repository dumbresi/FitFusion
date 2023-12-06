package com.fitFusion.springbootlibrary.controller;

import com.fitFusion.springbootlibrary.service.CsvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CsvController {

    @Autowired
    private CsvService csvService;

    @PostMapping("/api/upload-csv")
    public String uploadCsvFile(@RequestParam("file") String file) {
        try {
            csvService.readAndSaveDataFromCsv(file);
            return "File uploaded and data saved successfully.";
        } catch (Exception e) {
            System.out.println("**: "+e);
            return "Error: " + e.getMessage();
        }
    }
}