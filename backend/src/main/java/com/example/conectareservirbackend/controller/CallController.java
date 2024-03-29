package com.example.conectareservirbackend.controller;

import com.example.conectareservirbackend.model.Calls;
import com.example.conectareservirbackend.model.Users;
import com.example.conectareservirbackend.repository.CallRepository;
import org.aspectj.weaver.ast.Call;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:8090")
public class CallController {

    @Autowired

    private CallRepository callRepository;

    @PostMapping("/call")
    Calls salvarChamada(@RequestBody Calls newCall) {
        return callRepository.save(newCall);
    }

    @PutMapping("/updateCall")
    Calls atualizarChamada(@RequestBody Calls callToUpdate) {
        return callRepository.save(callToUpdate);
    }

    @GetMapping("/getCalls")
    List<Calls> encontrarChamadas() {
        return callRepository.findAll();
    }

    @GetMapping("/getLastUserCall/{callerUserId}")
    Calls encontrarPrimeiraChamadaPeloUsuario(Users callerUserId) {
        return callRepository.findTopByCallerUserOrderByDate(callerUserId);
    }

    @GetMapping("/getCall/{id}")
    Calls getCallsById(@PathVariable Long id) { return callRepository.findCallsById(id); }
}
