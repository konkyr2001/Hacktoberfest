package com.example.backend.Controller;

import com.example.backend.Model.Participant;
import com.example.backend.Repository.ParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/participants")
@CrossOrigin(origins = "http://localhost:5173/")
public class ParticipantController {

    @Autowired
    private ParticipantRepository userRepository;

    @GetMapping
    public List<Participant> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody Participant user) {
        try {
            Participant savedUser = userRepository.save(user);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
