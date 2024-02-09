package com.example.firstsample.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.firstsample.Entity.Loan;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {
}

