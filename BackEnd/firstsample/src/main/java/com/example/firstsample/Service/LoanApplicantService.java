package com.example.firstsample.Service;

import com.example.firstsample.Entity.LoanApplicantModel;
import com.example.firstsample.Repository.LoanApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanApplicantService {

    @Autowired
    private LoanApplicantRepository loanApplicantRepository;

    // Method to retrieve all loan applicants
    public List<LoanApplicantModel> getAllLoanApplicants() {
        return loanApplicantRepository.findAll();
    }

    // Method to save a new loan applicant
    public LoanApplicantModel saveLoanApplicant(LoanApplicantModel loanApplicant) {
        return loanApplicantRepository.save(loanApplicant);
    }
}
