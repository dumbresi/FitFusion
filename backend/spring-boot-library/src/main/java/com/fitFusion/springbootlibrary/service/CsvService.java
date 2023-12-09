package com.fitFusion.springbootlibrary.service;

import com.fitFusion.springbootlibrary.dao.CustomerRepository;
import com.fitFusion.springbootlibrary.entity.Customer;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

@Service
public class CsvService {

    @Autowired
    private CustomerRepository customerRepository;

    @Transactional
    public void readDataFromCsv(MultipartFile csvFile) throws IOException, CsvException {
        // Read data from CSV file
        try (CSVReader reader = new CSVReader(new InputStreamReader(csvFile.getInputStream()))) {
            List<String[]> allRows = reader.readAll();

            // Process each row and save to database
            for (String[] row : allRows) {
                // Assuming each row has two columns - for example, name and email
                String userId = row[0];
                String fitnessPlanId = row[1];
                System.out.println("userId: "+userId + " fitnessPlanId: "+fitnessPlanId);
                // Create a new Customer object
                Customer customer = new Customer(userId, fitnessPlanId);

                System.out.println("Customer: "+customer);
                // Save the customer to the database
                customerRepository.save(customer);
            }
        }
    }
}
