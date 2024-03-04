package com.dmss.citysparkapplication.service.impl;

import com.dmss.citysparkapplication.model.Person;

import com.dmss.citysparkapplication.repository.PersonRepository;
import com.dmss.citysparkapplication.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public void update(Person person) {
        person.setCreatedDt(LocalDateTime.now());
        person.setUpdatedDt(LocalDateTime.now());

        // Assume the person model from frontend have all the required fields. Otherwise, need to do field check here.
        personRepository.save(person);
    }

    @Override
    public Person get(Integer id) {
        return personRepository.findById(id).get();
    }
}
