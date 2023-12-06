package com.fitFusion.springbootlibrary.service;

import com.fitFusion.springbootlibrary.dao.FitnessClassRepository;
import com.fitFusion.springbootlibrary.entity.FitnessClass;
import com.fitFusion.springbootlibrary.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FitnessClassService {

    @Autowired
    private FitnessClassRepository fitnessClassRepository;

    public void getImageBytes(Long classId) {


    }

    public List<FitnessClass> getSortedFitnessClasses() {
        Sort sort = Sort.by(Sort.Direction.ASC, "className");

        List<FitnessClass> fitnessClassesSorted = fitnessClassRepository.findAll(sort);

        if (fitnessClassesSorted.isEmpty()) {
            throw new ResourceNotFoundException("No fitness classes found.");
        }
        return fitnessClassesSorted;
    }
}