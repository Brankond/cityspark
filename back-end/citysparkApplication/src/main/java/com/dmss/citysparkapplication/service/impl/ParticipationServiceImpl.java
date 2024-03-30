package com.dmss.citysparkapplication.service.impl;

import com.dmss.citysparkapplication.model.Participation;
import com.dmss.citysparkapplication.repository.ParticipationRepository;
import com.dmss.citysparkapplication.service.ParticipationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service()
@Transactional
public class ParticipationServiceImpl implements ParticipationService {
    private static final Logger log = LoggerFactory.getLogger(ParticipationServiceImpl.class);

    @Autowired
    private ParticipationRepository participationRepo;

    public boolean registerEvent(Participation participation){
        boolean result = false;

        try{
            participationRepo.save(participation);
            result = true;
        }catch (Exception e){
            log.error("Fail to register the event, {}", e.getMessage());
        }

        return result;
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

}
