package com.example.conectareservirbackend.controller;

import com.example.conectareservirbackend.model.Users;
import com.example.conectareservirbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/user/{username}")
    Users getUserByEmail(@PathVariable String email) {
        return userRepository.findByEmail(email);
    }

    @GetMapping("/users")
    List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{username}/{password}")
    Users ConfirmUserLogin(@PathVariable String username, @PathVariable String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }

    @PutMapping("/users/{newPassword}/{userEmail}")
    Integer atualizarSenhaDoUsuarioPorEmailController(@PathVariable String newPassword, @PathVariable String userEmail) {
        return userRepository.atualizarSenhaDoUsuarioPorEmail(newPassword, userEmail);
    }
}
