package com.dmss.citysparkapplication.service;

import com.dmss.citysparkapplication.dto.UserDTO;
import com.dmss.citysparkapplication.model.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

public interface UserService {
    Optional<User> getUserByEmail(String email);

    boolean createUser(UserDTO user);
}
