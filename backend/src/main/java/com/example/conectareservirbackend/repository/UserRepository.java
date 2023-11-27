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

    Users findByEmailAndAndPassword(String email, String password);

    Users findByEmail(String email);

    Users findUsersById(Long userId);

    String queryUpdatePassword = "UPDATE Users SET password = :newPassword WHERE email = :userEmail";
    @Modifying
    @Transactional
    @Query(queryUpdatePassword)
    Integer atualizarSenhaDoUsuarioPorEmail(@Param("newPassword") String newPassword, @Param("userEmail") String userEmail);

    String queryUpdateForgetNumber = "UPDATE Users SET forgetPasswordNumber = :newForgetNumber WHERE email = :userEmail";
    @Modifying
    @Transactional
    @Query(queryUpdateForgetNumber)
    Integer atualizarNumeroEsquecimentoDoUsuarioPorEmail(@Param("newForgetNumber") String newForgetNumber, @Param("userEmail") String userEmail);

    String queryUpdateSignupCode = "UPDATE Users SET signupCode = :signupCode WHERE email = :userEmail";
    @Modifying
    @Transactional
    @Query(queryUpdateSignupCode)
    Integer atualizarCodigoDeSignupPorEmail(@Param("signupCode") String signupCode, @Param("userEmail") String userEmail);

    /*
    String queryFindSignupCode = "SELECT signupCode FROM Users WHERE email = :userEmail";
    @Query(queryUpdateSignupCode)
    String encontrarCodigoDeSignupPorEmail(@Param("userEmail") String userEmail);

    String queryFindVerifiedAt = "SELECT verifiedAt FROM Users WHERE email = :userEmail";
    @Query(queryFindVerifiedAt)
    String encontrarDataDeverificacaoPorEmail(@Param("userEmail") String userEmail);
     */

}