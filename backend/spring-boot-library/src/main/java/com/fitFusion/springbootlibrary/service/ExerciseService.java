package com.fitFusion.springbootlibrary.service;

import com.fitFusion.springbootlibrary.dao.ExerciseRepository;
import com.fitFusion.springbootlibrary.entity.Exercise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ExerciseService implements ExerciseServiceInterface {
    @Autowired
    private ExerciseRepository exerciseRepository;

    @Transactional
    @Override
    public List<Exercise> getExercises()  {
        return exerciseRepository.findAll();
    }
}
