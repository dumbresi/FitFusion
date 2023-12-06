package com.fitFusion.springbootlibrary.service;

import com.fitFusion.springbootlibrary.dao.CustomerRepository;
import com.fitFusion.springbootlibrary.entity.Customer;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.io.FileReader;
import java.io.IOException;

@Service
public class CsvService {

    @Autowired
    private CustomerRepository customerRepository;


    @Transactional
    public void readAndSaveDataFromCsv(String csvFilePath) throws IOException, CsvException {
        try (CSVReader reader = new CSVReader(new FileReader(csvFilePath))) {
            reader.readAll().stream()
                    .map(row -> {
                        try {
                            return new Customer(row[0], row[1]);
                        } catch (NumberFormatException e) {
                            System.err.println("Invalid numeric value in CSV: " + e.getMessage());
                            return null;
                        }
                    })
                    .filter(customer -> customer != null)
                    .forEach(customerRepository::save);
        }
    }
}
