package com.dmss.citysparkapplication.controller;

import com.dmss.citysparkapplication.model.Event;
import com.dmss.citysparkapplication.repository.EventRepository;
import com.dmss.citysparkapplication.service.EventService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cityspark/event")
public class EventController {

    private static final Logger log = LoggerFactory.getLogger(EventController.class);

    @Autowired
    EventService eventService;

    @Autowired
    EventRepository eventRepo;

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
    @GetMapping("/review/{eventId}")
    public Event reviewEvent(@PathVariable Integer eventId) {
        Event searchedEvent = new Event();
        try{
            searchedEvent = eventRepo.findById(eventId);

        }catch (Exception e){
            log.error("Fail to fetch this event from database, {}", e.getMessage());

        }
        return searchedEvent;
    }

    @GetMapping("/delete/{id}")
    public boolean deleteEvent(@PathVariable Integer id) {
        boolean deleteResult = false;

        try{
            deleteResult = eventService.deleteEvent(id);
        }catch (Exception e) {
            log.error("Fail to delete event: {}", e.getMessage());
        }
        return deleteResult;
    }

}
