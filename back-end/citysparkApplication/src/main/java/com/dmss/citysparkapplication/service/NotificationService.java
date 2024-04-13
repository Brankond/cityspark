package com.dmss.citysparkapplication.service;

import com.dmss.citysparkapplication.model.Notification;

public interface NotificationService {

    void createOrUpdateNotification(Notification notification);

    void updateStatus(Integer id, String status);
}
