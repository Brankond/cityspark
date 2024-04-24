package com.dmss.citysparkapplication.controller;

import com.dmss.citysparkapplication.model.Person;
import com.dmss.citysparkapplication.model.Result;
import com.dmss.citysparkapplication.service.PersonService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(exposedHeaders = {"Access-Control-Allow-Origin","Access-Control-Allow-Credentials"})
@RequestMapping("/cityspark/person")
public class PersonController {
    private final static Logger log = LoggerFactory.getLogger(PersonController.class);

    @Autowired
    PersonService personService;

    /**
     * Get person information details with person id
     * @param id Integer, person ID
     * @return Result model with person information
     */
    @GetMapping("/{id}")
    public Person getPerson(@PathVariable Integer id) {

        try {
            Person person = personService.get(id);
            log.info("Get person information with id {}", id);
            return person;
        } catch (Exception e){
            log.error("Fail to get person detail with id {}, {}", id, e.getMessage());
            return null;
        }
    }

    @PutMapping
    public Result update(@RequestBody Person person) {
        try {
            personService.update(person);
            log.info("Updated person information with id {}", person.getId());
            return Result.success();
        } catch (Exception e){
            log.error("Fail to update person detail with id {}, {}", person.getId(), e.getMessage());
            return Result.error(e.getMessage());
        }
    }

}
