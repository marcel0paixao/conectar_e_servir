package com.example.conectareservirbackend.repository;

import com.example.conectareservirbackend.model.Users;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<Users, Long> {

    Users findByUsernameAndPassword(String username, String password);

    Users findByEmail(String email);

    String queryUpdatePassword = "UPDATE Users SET password = :newPassword WHERE email = :userEmail";

    @Modifying
    @Transactional
    @Query(queryUpdatePassword)
    Integer atualizarSenhaDoUsuarioPorEmail(@Param("newPassword") String newPassword, @Param("userEmail") String userEmail);

}