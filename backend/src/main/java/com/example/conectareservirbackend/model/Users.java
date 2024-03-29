package com.example.conectareservirbackend.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true, length = 100)
    private String email;
    @Column(nullable = false, length = 100)
    private String username;
    @Column(nullable = false, length = 100)
    private String password;
    @Column(nullable = true, length = 100)
    private Long forgetPasswordNumber;
    @Column(nullable = true, length = 100)
    private Long signupCode;
    @Column(nullable = false, unique = true, length = 14)
    private Long cpf;
    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date bornDate;
    @Column(nullable = true)
    @Temporal(TemporalType.DATE)
    private Date verifiedAt;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getForgertPasswordNumber() {
        return forgetPasswordNumber;
    }

    public void setForgertPasswordNumber(Long forgertPasswordNumber) {
        this.forgetPasswordNumber = forgertPasswordNumber;
    }

    public Long getSignupCode() {
        return signupCode;
    }

    public void setSignupCode(Long singupCode) {
        this.signupCode = singupCode;
    }

    public Long getCpf() {
        return cpf;
    }

    public void setCpf(Long cpf) {
        this.cpf = cpf;
    }

    public Date getBornDate() {
        return bornDate;
    }

    public void setBornDate(Date bornDate) {
        this.bornDate = bornDate;
    }

    public Date getVerifiedAt() {
        return verifiedAt;
    }

    public void setVerifiedAt(Date verifiedAt) {
        this.verifiedAt = verifiedAt;
    }
}
