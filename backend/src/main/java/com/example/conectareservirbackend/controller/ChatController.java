package com.example.conectareservirbackend.controller;

import com.example.conectareservirbackend.model.Chat;
import com.example.conectareservirbackend.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:8081")
public class ChatController {

    @Autowired

    private ChatRepository chatRepository;

    @GetMapping("/findChat/{callerUserId}/{calledUserId}")
    Chat encontrarChamada(Long callerUserId, Long calledUserId) {
        return chatRepository.findTopByCallerUserAndAndCalledUser(callerUserId, calledUserId);
    }

    @PostMapping("/chat")
    Chat salvarChamada(@RequestBody Chat newChat) {
        return chatRepository.save(newChat);
    }

}
