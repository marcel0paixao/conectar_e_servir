package com.example.conectareservirbackend.repository;

import com.example.conectareservirbackend.model.Calls;
import com.example.conectareservirbackend.model.Users;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface CallRepository extends JpaRepository<Calls, Long> {

    Calls findTopByCallerUserOrderByDate(Users callerUserId);

    List<Calls> findAll();


    /*

    String selectTopUmStatusCall = "SELECT id FROM Calls WHERE caller_User = :users ORDER BY Calls.id DESC LIMIT 1";

    @Query(selectTopUmStatusCall)
    Long selecionarUltimaChamada(@Param("users") Long users);

    String queryUpdateCallStatus = "UPDATE Calls SET status = :newStatus WHERE id = :id";

    @Modifying
    @Transactional
    @Query(queryUpdateCallStatus)
    Calls atualizarStatusChamada(@Param("newStatus") String newStatus, @Param("id") Long idCall);

    */

}
