package com.dmss.citysparkapplication.service.impl;

import com.dmss.citysparkapplication.model.Event;
import com.dmss.citysparkapplication.model.Notification;
import com.dmss.citysparkapplication.model.Participation;
import com.dmss.citysparkapplication.model.Person;
import com.dmss.citysparkapplication.repository.EventRepository;
import com.dmss.citysparkapplication.repository.NotificationRepository;
import com.dmss.citysparkapplication.repository.ParticipationRepository;
import com.dmss.citysparkapplication.repository.PersonRepository;
import com.dmss.citysparkapplication.service.ParticipationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service()
@Transactional
public class ParticipationServiceImpl implements ParticipationService {
    private static final Logger log = LoggerFactory.getLogger(ParticipationServiceImpl.class);

    @Autowired
    private ParticipationRepository participationRepo;
    @Autowired
    private EventRepository eventRepo;
    @Autowired
    private PersonRepository personRepo;
    @Autowired
    private NotificationRepository notificationRepo;

    public Participation registerEventAsOrganizer(Integer eventId, String personContactNo){
        Participation participation = new Participation();
        try{
            Event registerEvent = eventRepo.findById(eventId);
            Person registerPerson = personRepo.findByContactNo(personContactNo);
            participation.setEventId(registerEvent.getId());
            participation.setPersonId(registerPerson.getId());
            participation.setRole("organizer");
            participation.setStatus("active");
            participation.setUpdatedDT(LocalDateTime.now());
            participation.setCreatedDT(LocalDateTime.now());

            participationRepo.save(participation);

        }catch (Exception e){
            log.error("Fail to register the event, {}", e.getMessage());
        }

        return participation;
    }

    public Participation registerEventAsAttendee(Integer eventId, String personContactNo){
        Participation participation = new Participation();
        try{
            Event registerEvent = eventRepo.findById(eventId);
            Person registerPerson = personRepo.findByContactNo(personContactNo);
            participation.setEventId(registerEvent.getId());
            participation.setPersonId(registerPerson.getId());
            participation.setRole("attendee");
            participation.setStatus("active");
            participation.setUpdatedDT(LocalDateTime.now());
            participation.setCreatedDT(LocalDateTime.now());

            participationRepo.save(participation);

        }catch (Exception e){
            log.error("Fail to register the event, {}", e.getMessage());
        }

        return participation;
    }

    public boolean cancelRegistration(Integer id) {
        boolean result = false;

        try{
            participationRepo.deleteById(id);
            result = true;
        }catch (Exception e){
            log.error("Fail to cancel registration of event, {}", e.getMessage());
        }

        return result;
    }

    public Notification sendNotification(Participation participation, boolean register) {
        Notification notification = new Notification();
        notification.setStatus(participation.getStatus());
        notification.setEvent_id(participation.getEventId());
        notification.setPerson_id(participation.getPersonId());
        Event registeredEvent = eventRepo.findById(participation.getEventId());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String startTime = registeredEvent.getEventStartDT().format(formatter);
        String endTime = registeredEvent.getEventEndDT().format(formatter);
        String subject = register? "registered" : "deleted";
        String content = String.format("Congratulations, you have successfully %s an event: %s. " +
                "Location: %s. Date and time: From %s to %s", subject,
                registeredEvent.getTitle(), registeredEvent.getLocation(), startTime, endTime);
        notification.setSubject(subject);
        notification.setContent(content);
        try{
            notificationRepo.save(notification);
        }catch (Exception e){
            log.error("Fail to send the notification, {}", e.getMessage());
        }
        return notification;
    }

}
