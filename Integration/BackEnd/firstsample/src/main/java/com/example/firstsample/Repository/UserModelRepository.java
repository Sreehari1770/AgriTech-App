package com.example.firstsample.Repository;

// import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.firstsample.Entity.UserModel;

public interface UserModelRepository extends JpaRepository<UserModel, Long> {
    // Optional<UserModel> findByUsername(String username);
}
