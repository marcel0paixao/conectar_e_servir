package com.example.conectareservirbackend.controller;

import com.example.conectareservirbackend.model.Messages;
import com.example.conectareservirbackend.repository.MessagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:8081")
public class MessagesController {

    @Autowired

    private MessagesRepository messagesRepository;

    @PostMapping("/messages")
    Messages salvarMensagem(@RequestBody Messages newMessages) {
        return messagesRepository.save(newMessages);
    }

    @GetMapping("/findMessages/{chatId}")
    List<Messages> encontrarMensagens(@PathVariable Long chatId) {
        return messagesRepository.findAllByChatIdOrderById(chatId);
    }

}
