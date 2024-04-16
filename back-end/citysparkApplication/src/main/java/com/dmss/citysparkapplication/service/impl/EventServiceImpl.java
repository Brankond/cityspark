package com.dmss.citysparkapplication.service.impl;

import com.dmss.citysparkapplication.model.Event;
import com.dmss.citysparkapplication.repository.EventRepository;
import com.dmss.citysparkapplication.service.EventService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
@Service()
@Transactional
public class EventServiceImpl implements EventService {
    private static final Logger log = LoggerFactory.getLogger(EventServiceImpl.class);

    @Autowired
    private EventRepository eventRepo;

    public boolean createEvent(Event event) {
        boolean createResult = false;

        try{
            eventRepo.save(event);
            createResult = true;
        }catch (Exception e){
            log.error("Fail to save an event to database, {}", e.getMessage());
        }

        return createResult;
    }

    @Override
    public Event updateEvent(Integer id, Event updatedEvent) {
        Event existEvent = new Event();
        try {
            existEvent = eventRepo.findById(id);
        } catch (Exception e) {
            log.error("Cannot find event with id {}, {}",updatedEvent.getId(),e.getMessage());
        }
        existEvent.setTitle(updatedEvent.getTitle());
        existEvent.setUpdatedDT(LocalDateTime.now());
        existEvent.setEventStartDT(updatedEvent.getEventEndDT());
        existEvent.setEventEndDT(updatedEvent.getEventStartDT());
        existEvent.setDescription(updatedEvent.getDescription());
        existEvent.setLocation(updatedEvent.getLocation());
        existEvent.setType(updatedEvent.getType());
        existEvent.setStatus(updatedEvent.getStatus());

        return eventRepo.save(existEvent);
    }

    @Override
    public boolean deleteEvent(Integer id) {
        boolean deleteResult = false;

        try {
            eventRepo.deleteById(id);
            deleteResult = true;
        } catch (Exception e) {
            log.error("Fail to delete an event in database, {}", e.getMessage());
        }

        return deleteResult;
    }
}
