package com.fitFusion.springbootlibrary.service;

import com.fitFusion.springbootlibrary.dao.ExerciseRepository;
import com.fitFusion.springbootlibrary.entity.Exercise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;

    @Transactional
    public List<Exercise> getExercises()  {
        return exerciseRepository.findAll();
    }
}
