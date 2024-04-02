package com.dmss.citysparkapplication.repository;


import com.dmss.citysparkapplication.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
}
