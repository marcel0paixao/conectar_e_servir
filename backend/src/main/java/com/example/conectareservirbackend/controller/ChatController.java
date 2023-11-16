package com.example.conectareservirbackend.controller;

import com.example.conectareservirbackend.model.Chat;
import com.example.conectareservirbackend.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:8081")
public class ChatController {

    @Autowired

    private ChatRepository chatRepository;

    @PostMapping("/chat")
    Chat salvarChamada(@RequestBody Chat newChat) {
        return chatRepository.save(newChat);
    }

}
