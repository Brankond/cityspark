package com.dmss.citysparkapplication.service.impl;

import com.dmss.citysparkapplication.dto.UserDTO;
import com.dmss.citysparkapplication.model.User;
import com.dmss.citysparkapplication.repository.UserRepository;
import com.dmss.citysparkapplication.service.UserService;
import com.dmss.citysparkapplication.utils.DateTimeUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private static final Logger log = LoggerFactory.getLogger(EventServiceImpl.class);

    @Autowired
    UserRepository userRepository;

    @Override
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public boolean createUser(UserDTO user) {
        boolean saveUserResult;

        User newUser = new User();
        String currentDateTimeString = DateTimeUtil.getCurrentDateTimeString();

        newUser.setEmail(user.getEmail());
        newUser.setPassword(user.getPassword());
        newUser.setCreatedDate(currentDateTimeString);
        newUser.setUpdatedDate(currentDateTimeString);

        try {
            userRepository.save(newUser);
            saveUserResult = true;
        } catch (Exception e) {
            saveUserResult = false;
        }

        return saveUserResult;
    }
}
