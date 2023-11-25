package com.example.conectareservirbackend.repository;

import com.example.conectareservirbackend.model.Chat;
import com.example.conectareservirbackend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {

    Chat findTopByCallerUserAndAndCalledUser(Long callerUserId, Long calledUserId);

}
