package com.example.conectareservirbackend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long callerUser;
    private Long calledUser;

    /*
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "callerUsers_Messages", referencedColumnName = "id")
    private List<Messages> callerUserMessages;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "calledUsers_Messages", referencedColumnName = "id")
    private List<Messages> calledUserMessages;
     */

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

    /*
    public List<Messages> getCallerUserMessages() {
        return callerUserMessages;
    }

    public void setCallerUserMessages(List<Messages> callerUserMessages) {
        this.callerUserMessages = callerUserMessages;
    }

    public List<Messages> getCalledUserMessages() {
        return calledUserMessages;
    }

    public void setCalledUserMessages(List<Messages> calledUserMessages) {
        this.calledUserMessages = calledUserMessages;
    }
    */
}
