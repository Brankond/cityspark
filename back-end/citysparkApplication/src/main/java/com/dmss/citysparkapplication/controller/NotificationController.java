package com.dmss.citysparkapplication.controller;

import com.dmss.citysparkapplication.model.Notification;
import com.dmss.citysparkapplication.model.Result;
import com.dmss.citysparkapplication.service.NotificationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cityspark/notification")
public class NotificationController {
    private final static Logger log = LoggerFactory.getLogger(PersonController.class);

    @Autowired
    NotificationService notificationService;

    @PutMapping
    public Result update(@RequestBody Notification notification) {
        try {
            notificationService.update(notification);
            log.info("Updated notification with id {}", notification.getId());
            return Result.success();
        } catch (Exception e) {
            log.error("Fail to update notification with id {}, {}", notification.getId(), e.getMessage());
            return Result.error(e.getMessage());
        }
    }
}
