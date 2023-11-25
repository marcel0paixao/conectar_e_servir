package com.example.conectareservirbackend.controller;

import com.example.conectareservirbackend.model.Users;
import com.example.conectareservirbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:8081")
public class UserController {

    @Autowired

    private UserRepository userRepository;

    @PostMapping("/user")
    Users newUser(@RequestBody Users newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/user/{email}")
    Users getUserByEmail(@PathVariable String email) {
        return userRepository.findByEmail(email);
    }

    @GetMapping("/login/{email}/{password}")
    Users getLoginByEmail(@PathVariable String email, @PathVariable String password) {
        return userRepository.findByEmailAndAndPassword(email, password);
    }

    @GetMapping("/user/{username}/{password}")
    Users ConfirmUserLogin(@PathVariable String username, @PathVariable String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }

    @PutMapping("/users/{newPassword}/{userEmail}")
    Integer atualizarSenhaDoUsuarioPorEmailController(@PathVariable String newPassword, @PathVariable String userEmail) {
        return userRepository.atualizarSenhaDoUsuarioPorEmail(newPassword, userEmail);
    }

    @PutMapping("/usersForgetNumber/{newForgetNumber}/{userEmail}")
    Integer atualizarNumeroEsquecimentoDoUsuarioPorEmailController(@PathVariable String newForgetNumber, @PathVariable String userEmail) {
        return userRepository.atualizarNumeroEsquecimentoDoUsuarioPorEmail(newForgetNumber, userEmail);
    }

    @PutMapping("/usersSignupCode/{signupCode}/{userEmail}")
    Integer atualizarCodigoDeSignupPorEmailController(@PathVariable String signupCode, @PathVariable String userEmail) {
        return userRepository.atualizarCodigoDeSignupPorEmail(signupCode, userEmail);
    }

    /*
    @PutMapping("/usersSignupCode/{signupCode}/{userEmail}")
    Integer atualizarCodigoDeSignupPorEmailController(@PathVariable String signupCode, @PathVariable String userEmail) {
        return userRepository.atualizarCodigoDeSignupPorEmail(signupCode, userEmail);
    }





     */

}
