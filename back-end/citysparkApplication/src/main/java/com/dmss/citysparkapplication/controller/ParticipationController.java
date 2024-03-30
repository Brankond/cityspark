package com.dmss.citysparkapplication.controller;


import com.dmss.citysparkapplication.model.Participation;
import com.dmss.citysparkapplication.repository.ParticipationRepository;
import com.dmss.citysparkapplication.service.ParticipationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cityspark/participation")
public class ParticipationController {

    private static final Logger log = LoggerFactory.getLogger(ParticipationController.class);

    @Autowired
    ParticipationService participationService;
    @Autowired
    ParticipationRepository participationRepo;

    @PostMapping
    public boolean registerEvent(@RequestBody Participation participation) { //add organizer or attendee
        boolean result = false;

        try{
            result = participationService.registerEvent(participation);

        }catch (Exception e){
            log.error("Fail to register the event for the user, {}", e.getMessage());
        }

        return result;
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
            searchedParticipation = participationRepo.findByPersonId(eventId);
        }catch (Exception e){
            log.error("Fail to find registration by event id: {}", e.getMessage());
        }

        return searchedParticipation;
    }

    @GetMapping("/delete/{id}")
    public boolean cancelRegistration(@PathVariable Integer id) {
        boolean result = false;

        try {
            result = participationService.cancelRegistration(id);
        }catch (Exception e) {
            log.error("Fail to cancel registration: {}", e.getMessage());
        }
        return result;
    }

}
