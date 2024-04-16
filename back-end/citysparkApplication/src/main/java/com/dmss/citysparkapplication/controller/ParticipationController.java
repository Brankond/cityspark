package com.dmss.citysparkapplication.controller;


import com.dmss.citysparkapplication.model.Notification;
import com.dmss.citysparkapplication.model.Participation;
import com.dmss.citysparkapplication.repository.ParticipationRepository;
import com.dmss.citysparkapplication.service.ParticipationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cityspark/participation")
public class ParticipationController {

    private static final Logger log = LoggerFactory.getLogger(ParticipationController.class);

    @Autowired
    ParticipationService participationService;
    @Autowired
    ParticipationRepository participationRepo;

    @PostMapping("/registerAsOrganizer/{eventId}{personContactNo}")
    public Notification registerEventAsOrganizer(@PathVariable Integer eventId, @PathVariable String personContactNo) {
        boolean result = false;
        Notification notification = new Notification();
        try{
            Participation participation = participationService.registerEventAsOrganizer(eventId, personContactNo);
            if (participation.getEventId() != null){
                result = true;
            }
            notification = participationService.sendNotification(participation, true);

        }catch (Exception e){
            log.error("Fail to register the event for the user, {}", e.getMessage());
        }

        return notification;
    }

    @PostMapping("/registerAsAttendee")
    public Notification registerEventAsAttendee(@RequestBody Map<String, String> requestBody) {
        boolean result = false;
        Notification notification = new Notification();
        try{
            String eventIdString = requestBody.get("eventId");
            Integer eventId = Integer.parseInt(eventIdString);
            String personContactNo = requestBody.get("personContactNo");
            Participation participation = participationService.registerEventAsAttendee(eventId, personContactNo);
            if (participation.getEventId() != null){
                result = true;
            }
            notification = participationService.sendNotification(participation, true);

        }catch (Exception e){
            log.error("Fail to register the event for the user, {}", e.getMessage());
        }

        return notification;
    }

    @GetMapping("/reviewallbypersonid/{personId}")
    public List<Participation> reviewAllParticipationByPersonId(@PathVariable Integer personId) {
        List<Participation> searchedParticipation = new ArrayList<>();

        try {
            searchedParticipation = participationRepo.findByPersonId(personId);
        }catch (Exception e){
            log.error("Fail to find registration by person id: {}", e.getMessage());
        }

        return searchedParticipation;
    }

    @GetMapping("/reviewallbyeventid/{eventId}")
    public List<Participation> reviewAllParticipationByEventId(@PathVariable Integer eventId) {
        List<Participation> searchedParticipation = new ArrayList<>();

        try {
            searchedParticipation = participationRepo.findByEventId(eventId);
        }catch (Exception e){
            log.error("Fail to find registration by event id: {}", e.getMessage());
        }

        return searchedParticipation;
    }

    @GetMapping("/delete/{id}")
    public boolean cancelRegistration(@PathVariable Integer id) {
        boolean result = false;

        try {
            Participation participation = participationRepo.findById(id);
            Notification notification = participationService.sendNotification(participation, false);
            result = participationService.cancelRegistration(id);
        }catch (Exception e) {
            log.error("Fail to cancel registration: {}", e.getMessage());
        }
        return result;
    }

}
