package com.dmss.citysparkapplication.controller;

import com.dmss.citysparkapplication.model.Person;
import com.dmss.citysparkapplication.model.Result;
import com.dmss.citysparkapplication.repository.PersonRepository;
import com.dmss.citysparkapplication.service.PersonService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cityspark/person")
public class PersonController {
    private static Logger log = LoggerFactory.getLogger(PersonController.class);

    @Autowired
    private ApplicationContext context;

    @Autowired
    PersonService personService;

    @GetMapping("/{id}")
    public Result getPerson(@PathVariable Integer id) {

        log.info("Get person information with id {}", id);

        Person person = personService.get(id);

        return Result.success(person);
    }
}
