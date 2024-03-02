package com.dmss.citysparkapplication.controller;

import com.dmss.citysparkapplication.model.Event;
import com.dmss.citysparkapplication.service.EventService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cityspark/event")
public class EventController {

    private static Logger log = LoggerFactory.getLogger(EventController.class);

    @Autowired
    EventService eventService;

    @PostMapping("/create")
    public boolean createEvent(@RequestBody Event event) {

        boolean createResult = false;

        try{
            createResult = eventService.createEvent(event);
        }catch (Exception e) {
            log.error("Fail to create event: {}", e.getMessage());
        }

        return createResult;
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Integer id, @RequestBody Event updatedEvent) {
        Event updated = eventService.updateEvent(id, updatedEvent);
        return ResponseEntity.ok(updated);
    }

}
