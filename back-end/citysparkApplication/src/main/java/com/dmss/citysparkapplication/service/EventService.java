package com.dmss.citysparkapplication.service;

import com.dmss.citysparkapplication.model.Event;

public interface EventService {
    public boolean createEvent(Event event);

    Event updateEvent(Integer id, Event updatedEvent);

    boolean deleteEvent(Integer id);
}
