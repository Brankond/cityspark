package com.dmss.citysparkapplication.controller;

import com.dmss.citysparkapplication.dto.UserDTO;
import com.dmss.citysparkapplication.model.User;
import com.dmss.citysparkapplication.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cityspark/user")
public class UserController {
    private final static Logger log = LoggerFactory.getLogger(PersonController.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @GetMapping("/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email).orElse(null);
    }

    @PostMapping("/create")
    public boolean createUser(@RequestBody UserDTO user) {
        return userService.createUser(user);
    }

    @PostMapping("/auth")
    public ResponseEntity<String> authenticateUser(@RequestBody UserDTO user) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return ResponseEntity.ok("User authenticated");
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        }
    }
}
