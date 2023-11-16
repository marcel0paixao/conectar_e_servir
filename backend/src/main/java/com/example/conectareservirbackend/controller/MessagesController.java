package com.example.conectareservirbackend.controller;

import com.example.conectareservirbackend.model.Messages;
import com.example.conectareservirbackend.repository.MessagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:8081")
public class MessagesController {

    @Autowired

    private MessagesRepository messagesRepository;

    @PostMapping("/chat")
    Messages salvarChamada(@RequestBody Messages newMessages) {
        return messagesRepository.save(newMessages);
    }

}
