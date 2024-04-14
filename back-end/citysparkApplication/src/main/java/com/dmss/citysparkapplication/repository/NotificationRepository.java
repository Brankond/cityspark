package com.dmss.citysparkapplication.repository;


import com.dmss.citysparkapplication.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    @Query(value = "update Notification set status = :status " +
            "where id = :id")
    void updateStatusById(Integer id, String status);
}
