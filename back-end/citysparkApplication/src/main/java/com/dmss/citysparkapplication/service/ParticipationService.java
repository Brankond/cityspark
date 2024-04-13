package com.dmss.citysparkapplication.service;

import com.dmss.citysparkapplication.model.Notification;
import com.dmss.citysparkapplication.model.Participation;

public interface ParticipationService {

    Participation registerEventAsOrganizer(Integer eventId, String personContactNo);

    Participation registerEventAsAttendee(Integer eventId, String personContactNo);

    public boolean cancelRegistration(Integer id);

    Notification sendNotification(Participation participation, boolean register);

}
