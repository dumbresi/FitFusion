package com.fitFusion.springbootlibrary.service;

import com.fitFusion.springbootlibrary.dao.ExerciseRepository;
import com.fitFusion.springbootlibrary.entity.Exercise;
import com.fitFusion.springbootlibrary.entity.FitnessClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import java.util.Comparator;

@Service
@Transactional
public class TimeSortableExerciseService extends ExerciseService implements TimeSortableExerciseServiceInterface,NameSortableExcerciseService{

    @Autowired
    private ExerciseRepository exerciseRepository;
    @Override
    public List<Exercise> getSortedExercisesByDuration() {

        return exerciseRepository.findAll()
                .stream().sorted(Comparator.comparing(Exercise::getDuration))
                .collect(Collectors.toList());
    }

    @Override
    public List<Exercise> getSortedExercisesByName() {
        return exerciseRepository.findAll().stream().
                sorted(Comparator.comparing(Exercise::getName)).collect(Collectors.toList());
    }
}
