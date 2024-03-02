package com.dmss.citysparkapplication.service.impl;

import com.dmss.citysparkapplication.controller.EventController;
import com.dmss.citysparkapplication.model.Event;
import com.dmss.citysparkapplication.repository.EventRepository;
import com.dmss.citysparkapplication.service.EventService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service()
public class EventServiceImpl implements EventService {
    private static Logger log = LoggerFactory.getLogger(EventServiceImpl.class);

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

}
