package com.fitFusion.springbootlibrary.dao;

import com.fitFusion.springbootlibrary.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
