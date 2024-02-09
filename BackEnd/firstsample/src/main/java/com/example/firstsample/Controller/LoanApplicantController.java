package com.example.firstsample.Controller;

import com.example.firstsample.Entity.LoanApplicantModel;
import com.example.firstsample.Service.LoanApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/loanApplicants")
public class LoanApplicantController {

    @Autowired
    private LoanApplicantService loanApplicantService;

    // GET method to retrieve all loan applicants
    @GetMapping
    public List<LoanApplicantModel> getAllLoanApplicants() {
        return loanApplicantService.getAllLoanApplicants();
    }

    // POST method to create a new loan applicant
    @PostMapping
    public LoanApplicantModel createLoanApplicant(@RequestBody LoanApplicantModel loanApplicant) {
        return loanApplicantService.saveLoanApplicant(loanApplicant);
    }
}
