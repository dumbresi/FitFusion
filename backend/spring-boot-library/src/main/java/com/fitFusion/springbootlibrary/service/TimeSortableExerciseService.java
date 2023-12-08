package com.fitFusion.springbootlibrary.service;

import com.fitFusion.springbootlibrary.dao.ExerciseRepository;
import com.fitFusion.springbootlibrary.entity.Exercise;
import com.fitFusion.springbootlibrary.entity.FitnessClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Comparator;
import java.util.List;

@Service
@Transactional
public class TimeSortableExerciseService extends ExerciseService implements TimeSortableExerciseServiceInterface{

    @Autowired
    private ExerciseRepository exerciseRepository;
    @Override
    public List<Exercise> getSortedExercisesByDuration() {
        List<Exercise> exercises = getExercises();

        Sort sort = Sort.by(Sort.Direction.ASC, "duration");

        return exerciseRepository.findAll(sort);
    }
}
