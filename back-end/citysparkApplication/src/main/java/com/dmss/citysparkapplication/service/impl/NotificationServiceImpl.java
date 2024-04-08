package com.dmss.citysparkapplication.service.impl;

import com.dmss.citysparkapplication.model.Notification;
import com.dmss.citysparkapplication.repository.NotificationRepository;
import com.dmss.citysparkapplication.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public void update(Notification notification) {
        notification.setUpdated_dt(LocalDateTime.now());

        notificationRepository.save(notification);
    }
}
