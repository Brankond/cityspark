package com.dmss.citysparkapplication.service.impl;

import com.dmss.citysparkapplication.model.Feedback;
import com.dmss.citysparkapplication.repository.FeedbackRepository;
import com.dmss.citysparkapplication.service.FeedbackService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
@Service()
@Transactional
public class FeedbackServiceImpl implements FeedbackService {
    private static final Logger log = LoggerFactory.getLogger(EventServiceImpl.class);

    @Autowired
    private FeedbackRepository feedbackRepo;


    @Override
    public boolean createFeedback(Feedback feedback) {
        boolean createResult = false;

        try{
            feedbackRepo.save(feedback);
            createResult = true;
        }catch (Exception e){
            log.error("Fail to save an event to database, {}", e.getMessage());
        }

        return createResult;
    }
}
