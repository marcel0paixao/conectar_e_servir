package com.example.conectareservirbackend.repository;

import com.example.conectareservirbackend.model.Messages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessagesRepository extends JpaRepository<Messages, Long> {
}
