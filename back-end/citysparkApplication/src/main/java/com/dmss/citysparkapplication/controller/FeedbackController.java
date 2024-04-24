package com.dmss.citysparkapplication.controller;

import com.dmss.citysparkapplication.model.Event;
import com.dmss.citysparkapplication.model.Feedback;
import com.dmss.citysparkapplication.repository.FeedbackRepository;
import com.dmss.citysparkapplication.service.FeedbackService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(exposedHeaders = {"Access-Control-Allow-Origin","Access-Control-Allow-Credentials"})
@RestController
@RequestMapping("/cityspark/feedback")
public class FeedbackController {

    private static final Logger log = LoggerFactory.getLogger(FeedbackController.class);

    @Autowired
    FeedbackService feedbackService;

    @Autowired
    FeedbackRepository feedbackRepo;

    @PostMapping("/create")
    public boolean createFeedback(@RequestBody Feedback feedback) {

        boolean createResult = false;

        try{
            createResult = feedbackService.createFeedback(feedback);
        }catch (Exception e) {
            log.error("Fail to create event: {}", e.getMessage());
        }

        return createResult;
    }

    @GetMapping("/reviewall")
    public List<Feedback> reviewAllFeedback() {
        List<Feedback> searchedFeedbacks = new ArrayList<>();

        try{
            searchedFeedbacks = feedbackRepo.findAll();
        }catch (Exception e){
            log.error("Fail to fetch the event list from database, {}", e.getMessage());
        }
        return searchedFeedbacks;
    }
    //test

}
