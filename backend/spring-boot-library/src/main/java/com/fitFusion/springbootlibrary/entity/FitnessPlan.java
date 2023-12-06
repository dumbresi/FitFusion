package com.fitFusion.springbootlibrary.entity;


import javax.persistence.*;

@Entity
public class FitnessPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "planName", nullable = false)
    private String planName;

    @Column(name = "goals")
    private String goals;

}
