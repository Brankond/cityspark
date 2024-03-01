package com.dmss.citysparkapplication.service.impl;

import com.dmss.citysparkapplication.model.Person;

import com.dmss.citysparkapplication.repository.PersonRepository;
import com.dmss.citysparkapplication.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public Person get(Integer id) {
        return personRepository.findById(id).get();
    }
}
