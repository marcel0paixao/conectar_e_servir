package com.example.conectareservirbackend.repository;

import com.example.conectareservirbackend.model.Messages;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessagesRepository extends JpaRepository<Messages, Long> {

    List<Messages> findAllByChatIdOrderById(Long chatId);

}
