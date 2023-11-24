package com.example.conectareservirbackend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "callerUsers_Messages", referencedColumnName = "id")
    private List<Messages> callerUserMessages;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "calledUsers_Messages", referencedColumnName = "id")
    private List<Messages> calledUserMessages;

}
