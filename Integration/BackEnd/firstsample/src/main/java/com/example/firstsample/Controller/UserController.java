package com.example.firstsample.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

// import com.example.firstsample.Entity.User;
import com.example.firstsample.Entity.UserModel;
import com.example.firstsample.Service.UserService;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/auth/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Get all users
    @GetMapping
    public List<UserModel> getAllUsers() {
        return userService.getAllUsers();
    }

    // Get user by id
    @GetMapping("/{id}")
    public UserModel getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // // Add new user
    @PostMapping
    public UserModel addUser(@RequestBody UserModel user) {
        return userService.addUser(user);
    }

    // Update user
    @PutMapping("/{id}")
    public UserModel updateUser(@PathVariable Long id, @RequestBody UserModel user) {
        return userService.updateUser(id, user);
    }

    // Delete user
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}

