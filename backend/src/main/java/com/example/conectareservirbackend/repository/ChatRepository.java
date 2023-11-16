package com.example.conectareservirbackend.repository;

import com.example.conectareservirbackend.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {
}
