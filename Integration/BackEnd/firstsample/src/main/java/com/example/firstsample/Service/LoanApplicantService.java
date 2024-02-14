package com.example.firstsample.Service;

import com.example.firstsample.Entity.LoanApplicantModel;
import com.example.firstsample.Repository.LoanApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public void approveLoanApplication(int loanId) {
        LoanApplicantModel loanApplicant = loanApplicantRepository.findById(loanId).orElse(null);
        if (loanApplicant != null) {
            loanApplicant.setStatus("approved");
            loanApplicantRepository.save(loanApplicant);
        }
    }

    public void rejectLoanApplication(int loanId) {
        LoanApplicantModel loanApplicant = loanApplicantRepository.findById(loanId).orElse(null);
        if (loanApplicant != null) {
            loanApplicant.setStatus("rejected");
            loanApplicantRepository.save(loanApplicant);
        }
    }
    public Optional<LoanApplicantModel> getLoanApplicantById(int loanId) {
        return loanApplicantRepository.findById(loanId);
    }
}
