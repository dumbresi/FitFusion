package com.fitFusion.springbootlibrary.entity;

import javax.persistence.*;

@Entity
public class Customer {

    @EmbeddedId
    private CustomerId id;

    public Customer(String userId, String fitnessPlanId) {
        this.id = new CustomerId(Long.valueOf(userId), Long.valueOf(fitnessPlanId));

    }

    public Customer() {}
}

