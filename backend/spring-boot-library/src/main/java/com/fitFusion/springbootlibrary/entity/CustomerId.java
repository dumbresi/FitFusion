package com.fitFusion.springbootlibrary.entity;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class CustomerId implements Serializable {

    private Long userId;

    private Long fitnessPlanId;

    public CustomerId(Long userId, Long fitnessPlanId) {
        this.userId = userId;
        this.fitnessPlanId = fitnessPlanId;
    }

    public CustomerId() {}

    @Override
    public String toString() {
        return "CustomerId{" +
                "userId=" + userId +
                ", fitnessPlanId=" + fitnessPlanId +
                '}';
    }
}
