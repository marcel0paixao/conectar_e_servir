package com.example.conectareservirbackend.model;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
public class Calls {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "caller", referencedColumnName = "id")
    private Long callerUser;
    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "called", referencedColumnName = "id")
    private Long calledUser;
    @Column(nullable = false)
    private String Status;
    private String description;
    private String address;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    private Boolean active;
    private String adress;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCallerUser() {
        return callerUser;
    }

    public void setCallerUser(Long callerUser) {
        this.callerUser = callerUser;
    }

    public Long getCalledUser() {
        return calledUser;
    }

    public void setCalledUser(Long calledUser) {
        this.calledUser = calledUser;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
