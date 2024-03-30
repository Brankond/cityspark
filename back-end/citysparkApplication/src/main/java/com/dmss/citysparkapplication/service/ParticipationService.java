package com.dmss.citysparkapplication.service;

import com.dmss.citysparkapplication.model.Notification;
import com.dmss.citysparkapplication.model.Participation;

public interface ParticipationService {

    boolean registerEvent(Participation participation);

    public boolean cancelRegistration(Integer id);

    Notification sendNotification(Participation participation, boolean register);

}
