package com.example.firstsample.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.firstsample.Repository.UserModelRepository;
// import com.example.firstsample.Entity.User;
import com.example.firstsample.Entity.UserModel;
import java.util.List;


@Service
public class UserService {

    @Autowired
    private UserModelRepository userRepository;

    // Get all users
    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    // Get user by id
    public UserModel getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    // Add new user
    public UserModel addUser(UserModel user) {
        return userRepository.save(user);
    }

    // Update user
    public UserModel updateUser(Long id, UserModel user) {
        UserModel existingUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());
        existingUser.setUsername(user.getUsername());
        existingUser.setMobileNumber((String) user.getMobileNumber());
        return userRepository.save(existingUser);
    }

    // Delete user
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}