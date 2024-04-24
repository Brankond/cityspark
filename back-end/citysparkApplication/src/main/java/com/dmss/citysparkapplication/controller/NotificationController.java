package com.dmss.citysparkapplication.controller;

import com.dmss.citysparkapplication.model.Notification;
import com.dmss.citysparkapplication.model.Result;
import com.dmss.citysparkapplication.service.NotificationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(exposedHeaders = {"Access-Control-Allow-Origin","Access-Control-Allow-Credentials"})
@RequestMapping("/cityspark/notification")
public class NotificationController {
    private final static Logger log = LoggerFactory.getLogger(PersonController.class);

    @Autowired
    NotificationService notificationService;

    @PutMapping
    public Result createOrUpdateNotification(@RequestBody Notification notification) {
        try {
            notificationService.createOrUpdateNotification(notification);
            log.info("Updated notification with id {}", notification.getId());
            return Result.success();
        } catch (Exception e) {
            log.error("Fail to update notification with id {}, {}", notification.getId(), e.getMessage());
            return Result.error(e.getMessage());
        }
    }

    @PutMapping("/updateStatus")
    public Result updateStatus(@RequestBody Notification notification) {
        try {
            notificationService.updateStatus(notification.getId(), notification.getStatus());
            log.info("Updated notification status with id {} to {}", notification.getId(), notification.getStatus());
            return Result.success();
        } catch (Exception e) {
            log.error("Fail to update notification status with id {}, {}", notification.getId(), e.getMessage());
            return Result.error(e.getMessage());
        }
    }
}
