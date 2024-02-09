package com.example.firstsample.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class LoanApplicantModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int loanId;
    private String loanType;
    private String applicantName;
    private String applicantAddress;
    private String applicantMobile;
    private String applicantEmail;
    private String applicantAadhaar;
    private String applicantPan;
    private String applicantSalary;
    private String loanAmountRequired;
    private String loanRepaymentMonths;

    // Default constructor
    public LoanApplicantModel() {}

    // Parameterized constructor
    public LoanApplicantModel(int loanId, String loanType, String applicantName, String applicantAddress,
                              String applicantMobile, String applicantEmail, String applicantAadhaar,
                              String applicantPan, String applicantSalary, String loanAmountRequired,
                              String loanRepaymentMonths) {
        this.loanId = loanId;
        this.loanType = loanType;
        this.applicantName = applicantName;
        this.applicantAddress = applicantAddress;
        this.applicantMobile = applicantMobile;
        this.applicantEmail = applicantEmail;
        this.applicantAadhaar = applicantAadhaar;
        this.applicantPan = applicantPan;
        this.applicantSalary = applicantSalary;
        this.loanAmountRequired = loanAmountRequired;
        this.loanRepaymentMonths = loanRepaymentMonths;
    }

    // Getters and setters
    public int getLoanId() {
        return loanId;
    }

    public void setLoanId(int loanId) {
        this.loanId = loanId;
    }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }

    public String getApplicantName() {
        return applicantName;
    }

    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }

    public String getApplicantAddress() {
        return applicantAddress;
    }

    public void setApplicantAddress(String applicantAddress) {
        this.applicantAddress = applicantAddress;
    }

    public String getApplicantMobile() {
        return applicantMobile;
    }

    public void setApplicantMobile(String applicantMobile) {
        this.applicantMobile = applicantMobile;
    }

    public String getApplicantEmail() {
        return applicantEmail;
    }

    public void setApplicantEmail(String applicantEmail) {
        this.applicantEmail = applicantEmail;
    }

    public String getApplicantAadhaar() {
        return applicantAadhaar;
    }

    public void setApplicantAadhaar(String applicantAadhaar) {
        this.applicantAadhaar = applicantAadhaar;
    }

    public String getApplicantPan() {
        return applicantPan;
    }

    public void setApplicantPan(String applicantPan) {
        this.applicantPan = applicantPan;
    }

    public String getApplicantSalary() {
        return applicantSalary;
    }

    public void setApplicantSalary(String applicantSalary) {
        this.applicantSalary = applicantSalary;
    }

    public String getLoanAmountRequired() {
        return loanAmountRequired;
    }

    public void setLoanAmountRequired(String loanAmountRequired) {
        this.loanAmountRequired = loanAmountRequired;
    }

    public String getLoanRepaymentMonths() {
        return loanRepaymentMonths;
    }

    public void setLoanRepaymentMonths(String loanRepaymentMonths) {
        this.loanRepaymentMonths = loanRepaymentMonths;
    }
}

