package com.example.firstsample.Repository;

import com.example.firstsample.Entity.LoanApplicantModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanApplicantRepository extends JpaRepository<LoanApplicantModel, Integer> {
    // You can add custom query methods if needed
}
