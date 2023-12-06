package com.fitFusion.springbootlibrary.dao;

import com.fitFusion.springbootlibrary.entity.Exercise;
import com.fitFusion.springbootlibrary.entity.FitnessClass;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExerciseRepository extends JpaRepository<Exercise, Long>{

    List<Exercise> findAll();
}
